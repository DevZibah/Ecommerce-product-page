import { useState } from 'react'
import menu from './assets/icon-menu.svg'
import cart from './assets/icon-cart.svg'
import cart1 from './assets/icon-cart1.svg'
import avatar from './assets/image-avatar.png'
import product1 from './assets/image-product-1.jpg'
import previous from './assets/icon-previous.svg'
import next from './assets/icon-next.svg'
import minus from './assets/icon-minus.svg'
import plus from './assets/icon-plus.svg'
import Modal from './Components/Modal'
import './style/All.css'
import Cart from './Components/Cart'
import Lightbox from './Components/Lightbox'
const App = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [current, setCurrent] = useState(0)
  const [show1, setShow1] = useState(false)
  const [carrt, setCarrt] = useState([])
  const [image, setImage] = useState(0)

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }
  const handleMinus = () => {
    setQuantity(quantity - 1)
    if (quantity == 0) {
      setQuantity(quantity)
    }
  }
  const price = parseFloat('125.00')
  const AddArray = [
    {
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646395345/image-product-1-thumbnail_lwr189.jpg',
      name: 'Autumn Limited Edition...',
      price: price,
    },
  ]
  const AddToCart = () => {
    setCarrt(AddArray)
  }
  const removeCart = () => {
    setCarrt([])
    setQuantity(0)
  }
  const imageSlider = [
    {
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646341753/image-product-1_lpx8p4.jpg',
    },
    {
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646341753/image-product-2_idqzgu.jpg',
    },
    {
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646341753/image-product-3_bj2gkd.jpg',
    },
    {
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646341753/image-product-4_mdfmuu.jpg',
    },
  ]
  const thumbNail = [
    {
      id: 0,
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646395345/image-product-1-thumbnail_lwr189.jpg',
    },
    {
      id: 1,
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646506189/image-product-2-thumbnail_x74ssu.jpg',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646506189/image-product-3-thumbnail_cvkfzu.jpg',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/sohmmie/image/upload/v1646506189/image-product-4-thumbnail_micqje.jpg',
    },
  ]

  const length = imageSlider.length
  // console.log(length)

  //if we have no data, return null
  if (!Array.isArray(imageSlider) || imageSlider.length <= 0) {
    return null
  }

  //checks if current is equal to length-1(3), if it is equal to that, it sets the image to index 0 else, it moves to the next image.
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <div className='App'>
      <nav className='grid4'>
        <section className='grid2'>
          <div className='menu'>
            <img onClick={() => setShow(true)} src={menu} alt='hamburger' />
            <Modal show={show} onClose={() => setShow(false)} />
          </div>
          <div className='snea'>
            <p>sneakers</p>
          </div>
          <div className='grid5'>
            <div>collection</div>
            <div>men</div>
            <div>women</div>
            <div>about</div>
            <div>contact</div>
          </div>
        </section>
        <section className='grid3'>
          <div className='cart'>
            <img onClick={() => setShow1(true)} src={cart} alt='cart' />
            <div onClose={() => setShow2(false)} className='count'>
              {quantity}
            </div>
            <Cart
              price={price}
              carrt={carrt}
              quantity={quantity}
              show1={show1}
              removeCart={removeCart}
              onClose={() => setShow1(false)}
            />
          </div>
          <div className='avatar'>
            <img src={avatar} alt='avatar' />
          </div>
        </section>
      </nav>
      <div className='hr'>
        <hr />
      </div>
      <section className='grid6'>
        <div>
          <div className='slider'>
            {imageSlider.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img
                      className='product1'
                      src={slide.image}
                      alt='product one'
                      onClick={() => setShow3(true)}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <div className='thumbnail'>
            {thumbNail.map((item, key) => {
              return (
                <div className='imgs' key={key}>
                  <img
                    className='thumbnailimg'
                    src={item.image}
                    alt='thumNail product images'
                    onClick={() =>
                      setCurrent(
                        current === item.id ? current : item.id
                      )
                    }
                  />
                  <Lightbox
                    thumbNail={thumbNail}
                    imageSlider={imageSlider}
                    current={current}
                    setCurrent={setCurrent}
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                    previous={previous}
                    next={next}
                    onClose={() => setShow3(false)}
                    show3={show3}
                  />
                </div>
              )
            })}
          </div>
          <div className='prevnext'>
            <div>
              <img onClick={prevSlide} src={previous} alt='previous' />
            </div>
            <div>
              <img onClick={nextSlide} src={next} alt='next' />
            </div>
          </div>
        </div>
        <div className='texts'>
          <small>sneaker company</small>
          <p className='textsp'>fall limited edition sneakers</p>
          <p className='textspp'>
            These low profile snickers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <section className='sec'>
            <div className='numbers'>
              <div className='numbers1'>
                <p className='num'>${price}.00</p>
                <div className='num1'>
                  <p>50%</p>
                </div>
              </div>
              <div>
                <p className='num2'>
                  <strike>$250.00</strike>
                </p>
              </div>
            </div>
            <div className='flexx'>
              <div className='addminus'>
                <div>
                  <img onClick={handleMinus} src={minus} alt='minus' />
                </div>
                <div>
                  <small className='quantity'>{quantity}</small>
                </div>
                <div>
                  <img onClick={handlePlus} src={plus} alt='plus' />
                </div>
              </div>
              <div>
                <button
                  onClose={() => setShow2(true)}
                  onClick={AddToCart}
                  className='button'
                >
                  <div>
                    <img src={cart1} alt='cart' />
                  </div>
                  <div>
                    <p>Add to cart</p>
                  </div>{' '}
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default App
