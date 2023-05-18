import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  const container = useRef(null)
  const el = useRef(null)

  useEffect(() => {
    const multiple = 20

    function transformElement(e) {
      window.requestAnimationFrame(function(){
        const x = e.clientX
        const y = e.clientY
        let box = el.current.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / multiple;
        let calcY = (x - box.x - (box.width / 2)) / multiple;
        el.current.style.transform  = `rotateX(${calcX}deg) rotateY(${calcY}deg) `;
      });
    }  

    function leaveEl () {
      el.current.style.transform  = `rotateX(0deg) rotateY(0deg) `;
    }

    container.current.addEventListener('mousemove', transformElement);
    container.current.addEventListener('mouseleave', leaveEl);

    return () => {
      container.current?.removeEventListener('mousemove', transformElement);
      container.current?.removeEventListener('mouseleave', leaveEl);
    }
  }, [])

  return (
      <div className={clsx('col col--4')}>
        <div className={styles.cursor} ref={container}>
        <div className={clsx("text--center", styles.cursorContent)} ref={el}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
