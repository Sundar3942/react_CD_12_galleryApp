// Write your code here
import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, onClickHandler} = props
  const {
    imageAltText,
    imageUrl,
    thumbnailUrl,
    thumbnailAltText,
  } = eachImageDetails
  const onClickBtn = () => {
    onClickHandler(imageUrl, imageAltText)
  }
  return (
    <li>
      <button onClick={onClickBtn} type="button" className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
