import '../styles/card.css'

function Card({
  character,
  handleClick,
  show
}) {
  return <div className='card'>
    <div className={`card__inner ${show ? '' : 'card__inner_flip'}`}>
      <div className="card__front">
        <img onClick={(e) => handleClick(character.id, e)} src={character.image} alt={character.name} />
        <p>{character.name}</p>

      </div>
      <div className='card__back'>
      </div>

    </div>
  </div>
}


export default Card
