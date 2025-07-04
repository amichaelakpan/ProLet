import './Search.css'
import Button from '../../utilities/Button'
import Property from '../../utilities/Property'
import property1 from '../../assets/images/property-1.jpg'
import property2 from '../../assets/images/property-2.jpg'
import property3 from '../../assets/images/property-3.jpg'
import property4 from '../../assets/images/property-4.jpg'
import property5 from '../../assets/images/property-5.jpg'
import property6 from '../../assets/images/property-6.jpg'
import property7 from '../../assets/images/property-7.jpg'
import property8 from '../../assets/images/property-8.jpg'
import property9 from '../../assets/images/property-9.jpg'
import property10 from '../../assets/images/property-10.jpg'
import property11 from '../../assets/images/property-11.jpg'
import property12 from '../../assets/images/property-12.jpg'
import heart from '../../assets/images/heart.png'

function Search() {
  return (
    <div className='search-container'>
      {/* Layer 1 */}
      <div className='search-content-1'>
        <h2>Based on your search</h2>
        <div>
          <Button
            text={`Browse more properties`}
            bgcolor={`#f3f4f4`}
            color={`#375ad1`}
            borderColor={`#375ad1`}
          />
        </div>
      </div>

      {/* Layer 2  */}
      <div className='search-content-2'>
        <select name='' id=''>
          <option value='' disabled selected hidden>
            Select property type...
          </option>
          <option value='1'>first</option>
          <option value='2'>second</option>
          <option value='3'>third</option>
          <option value='4'>fourth</option>
        </select>
        <select name='' id=''>
          <option value='' disabled selected hidden>
            Select Rooms...
          </option>
          <option value='1'>first</option>
          <option value='2'>second</option>
          <option value='3'>third</option>
          <option value='4'>fourth</option>
        </select>
        <select name='' id=''>
          <option value='' disabled selected hidden>
            Furnished Apartments...
          </option>
          <option value='1'>first</option>
          <option value='2'>second</option>
          <option value='3'>third</option>
          <option value='4'>fourth</option>
        </select>

        <div className='search-button'>
          <Button
            text={`Search`}
            bgcolor={`#3357d0`}
            color={`#fff`}
            borderColor={`#fff`}
            width={`15rem`}
          />
        </div>
      </div>

      {/* Layer 3 */}
      <div className='search-content-3'>
        <div>
          <Property img={property1} icon={heart} />
        </div>
        <div>
          <Property img={property2} icon={heart} />
        </div>
        <div>
          <Property img={property3} icon={heart} />
        </div>
        <div>
          <Property img={property4} icon={heart} />
        </div>
        <div>
          <Property img={property5} icon={heart} />
        </div>
        <div>
          <Property img={property6} icon={heart} />
        </div>
        <div>
          <Property img={property7} icon={heart} />
        </div>
        <div>
          <Property img={property8} icon={heart} />
        </div>
        <div>
          <Property img={property9} icon={heart} />
        </div>

        <div>
          <Property img={property10} icon={heart} />
        </div>
        <div>
          <Property img={property11} icon={heart} />
        </div>
        <div>
          <Property img={property12} icon={heart} />
        </div>
      </div>
    </div>
  )
}

export default Search
