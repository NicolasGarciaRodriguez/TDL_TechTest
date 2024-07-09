import React from 'react'
import { ENTITY_CONFIG } from './entity.config'
import './EntityCard.styles.scss';

const entityCardComponent = ({apiData, entityIndex}) => {
	const entityTitle = ENTITY_CONFIG[entityIndex][0];
	return (
		<>
			{apiData.map((data, index) => (
				<div key={index} className="entity-card">
					<h2 className="entity-card__name">{data[entityTitle.key]}</h2>
					<div className="entity-card__info">
						{ENTITY_CONFIG[entityIndex].map((entity, idx) => (
							<p key={idx}><strong>{entity.name}:</strong> {data[entity.key]}</p>
						))}
					</div>
				</div>
			))}
		</>
	)
}

export default entityCardComponent