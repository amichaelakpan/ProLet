import './StatCard.css'

function StatCard({ textColor, header, content, borderRightColor }) {
  return (
    <div
      className='about-stat-card'
      style={{ color: textColor, borderRight: `2px solid ${borderRightColor}` }}
    >
      <h2>{header}</h2>
      <p className='about-stat-card-content'>{content}</p>
    </div>
  )
}

export default StatCard
