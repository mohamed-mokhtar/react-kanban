import { useState } from 'react'
import CardForm from './components/CardForm'

export default function CardAdder({ column, onConfirm, onClickHandler }) {
  function confirmCard(card) {
    onConfirm(column, card)
    setAddingCard(false)
  }

  const [addingCard, setAddingCard] = useState(false)

  return (
    <>
      {addingCard ? (
        <CardForm onConfirm={confirmCard} onCancel={() => setAddingCard(false)} />
      ) : (
        <button className='react-kanban-card-adder-button' onClick={() => onClickHandler ? onClickHandler(column) : setAddingCard(!addingCard)}>
          +
        </button>
      )}
    </>
  )
}
