import React from 'react';
import { icons } from './iconList';

interface Props {
	type: string
	size?: string
	color?: string
  [key: string]: any
}

const Icon = ({ type, size = '16px', color = '#666', ...rest }: Props) => {

    const displayIcon = icons.find((e) => e.name === type);

		if (!displayIcon) {
			console.log(`not found icon: ${type}`)
			return null
		}

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 1024 1024"
            fill={color}
            dangerouslySetInnerHTML={{__html: displayIcon.svg}}
            {...rest}
        >
        </svg>
    )
};

export default Icon;