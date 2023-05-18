import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'

interface Props {}

const index = () => {
	const container = useRef(null)

	useEffect(() => {
		setTimeout(() => {
			container.current.style = 'display: none;'
		}, 2000)
	}, [])

  return (
		<div ref={container} className={styles.bg}>
			<div className={styles.wrap}>
				<div className={styles.shadowTop} />
				<div className={styles.shadowBottom} />
			</div>
		</div>
	)
}

export default index