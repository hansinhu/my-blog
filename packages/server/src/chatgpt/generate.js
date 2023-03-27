const OPENAI = require('openai');
const parse = require('co-body');
const log4js = require('../log4js')
const CustomError = require('../CustomError')

const logger = log4js.getLogger("access")

const { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } = OPENAI

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generate (ctx) {

	const { req, res } = ctx

  if (!configuration.apiKey) {
		throw new CustomError("OpenAI API key not configured, please follow instructions in README.md", 500);
  }

	let data = await parse(ctx);

  const { type, question } = data || '';
  if (question.trim().length === 0) {
		throw new CustomError("Please enter a valid question", 500);
  }

  try {
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: question,
    //   temperature: 0.6,
    // });
		logger.info(`start question: ${question}`)

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: ChatCompletionRequestMessageRoleEnum.User,
        content: question,
      }],
      temperature: 0.6,
    });

		logger.info(`result : ${JSON.stringify(completion.data.choices)}`)

		return { result: completion.data.choices[0].message.content }
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
			throw new CustomError(error.response.data.error.message, error.response.status);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
			throw new CustomError("An error occurred during your request.", 500);
    }
  }
  
}

module.exports = generate
