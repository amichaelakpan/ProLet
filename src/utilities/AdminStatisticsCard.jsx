import './AdminStatisticsCard.css'

function AdminStatisticsCard({ img, text, count, bgColor }) {
  return (
    <div className='admin-stat-container' style={{ backgroundColor: bgColor }}>
      <div className='admin-stats-content'>
        <p>{count}</p>
        <img src={img} alt={`${text} image`} />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default AdminStatisticsCard
