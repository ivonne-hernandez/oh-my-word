import './UserGuessRow.css';
const UserGuessRow = ({ typedLetters, currentWordInPlay, submittedWords }) => {
  return (
    <div className='user-guess-row-container'>
      <article
        className='typed-letter'>
          {typedLetters[0]}
      </article>
      <article
        className='typed-letter'>
          {typedLetters[1]}
      </article>
      <article
        className='typed-letter'>
          {typedLetters[2]}
      </article>
      <article
        className='typed-letter'>
          {typedLetters[3]}
      </article>
      <article
        className='typed-letter'>
          {typedLetters[4]}
      </article>
    </div>
  );
}

export default UserGuessRow;