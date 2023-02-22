// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachList} = props
  console.log(eachList)
  const {title, description, publishedDate} = eachList
  return (
    <li>
      <div className="flex-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
