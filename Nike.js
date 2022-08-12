import React from 'react'
import './Nike.css'
import jordanImage from "./NikeImage/jordanImage.png"
import starArrow from "./NikeImage/starArrow.png"
import nikelogo from "./NikeImage/nikelogo.png"
import searchIcon from "./NikeImage/searchIcon.png"
import favouriteIcon from "./NikeImage/favouriteIcon.png"
import workIcon from "./NikeImage/workIcon.png"
import shoelogo from "./NikeImage/shoelogo.jpg"
import nikejustdoit from "./NikeImage/nikejustdoit.jpg"
import womenswear from "./NikeImage/womenswear.jfif"
import womenshortwear from "./NikeImage/womenshortwear.jfif"
import menswear from "./NikeImage/menswear.jfif"
import NikeRunning from "./NikeImage/NikeRunning.jpg"
import airmaxplus from "./NikeImage/airmaxplus.jfif"
import airmax from "./NikeImage/airmax.jfif"
import airforce from "./NikeImage/airforce.jfif"
import blacknikeshoe from "./NikeImage/blacknikeshoe.jpg"
import rednikeshoe from "./NikeImage/rednikeshoe.jpg"
import womenshort from "./NikeImage/womenshort.jpg"
import kidsshort from "./NikeImage/kidsshort.jpg"
import menshort from "./NikeImage/menshort.jpg"
import blacknikelogo from "./NikeImage/blacknikelogo.png"
import firstaccess from "./NikeImage/firstaccess.jpg"
import shopping from "./NikeImage/shopping.jpg"
import nikebyYou from "./NikeImage/nikebyYou.jpg"
import footer1image from "./NikeImage/footer1image.jpg"
import footer2image from "./NikeImage/footer2image.jpg"


const Nike = () => {
  return (
    <>
        <div className='container'>

            {/* section 1 */}
            <div className='section1'>
                <div className='Navbar'>

                    <div className='jodstar'>
                        <div className='Jordan'>
                            <a href=''><img className='jordan' src={jordanImage} alt=""/></a>
                        </div>

                        <div className='StarArrow'>
                            <a href=''><img className='starArrow' src={starArrow} alt=""/></a>
                        </div>
                    </div>

                    <div className='NavBar'>
                        <ul className='nav'>
                            <li><a href=''>Help</a></li>
                            <li><a href=''/>|</li>
                            <li><a href=''>Join Us</a></li>
                            <li><a href=''/>|</li>
                            <li><a href=''>Sign In</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* section2 */}

            <div className='section2'>
                <div className='nike'>
                    <a href=''><img className='nikeIcon' src={nikelogo} alt=''/></a>
                </div>

                <div className='Nav-link'>
                    <ul className='new'>
                        <li><a href=''>New & Featured</a></li>
                        <li><a href=''>Men</a></li>
                        <li><a href=''>Women</a></li>
                        <li><a href=''>Kid</a></li>
                        <li><a href=''>Sale</a></li>
                        <li><a href=''>Back to School</a></li>
                    </ul>
                </div>

                <div className='SearchIcon'>
                    <a href=''><img className='searchicon' src={searchIcon} alt=""/></a>
                </div>

                <div className='searchbar'>
                    <input type="text" placeholder='Search'/>
                </div>

                <div>
                    <a href=''><img className='favouriteIcon' src={favouriteIcon} alt=""/></a>
                   
                    <a href=''><img className='workIcon' src={workIcon} alt=""/></a>
                </div>
            </div>
            

            {/* section 3 */}

            <div className='section3'>
                <div className='back'>
                    <p>Back to Fall Sale: Up to 60%</p>
                </div>

                <div className='use'>    
                    <p><a href='' className='usecode'>Use code SCORE20 for an 20% off select styles</a></p>
                </div>
            </div>

            {/* section 4 */}

            <div className='section4'>
                <a href=''><img className='sHoe' src={shoelogo} alt=""/></a>
                <div className='Topleft'>
                <span className='backtofall'>Back to Fall Sale</span>
                </div>

                <div className='Save'>
                <h1 className='save'>SAVE UP TO 60%</h1>
                </div>

                <div className='codeScore'>
                <p className='CodeScore'>Use code SCORE20 at checkout for an extra 20% off select styles.</p>
                </div>

                <div className='Exclusion'>
                <p className='exclusion'>Exclusion apply.</p>
                </div>

                <div className='shop'>
                    <button className='SHOP'><a href=''>Shop</a></button>
                </div>     
            </div>

            {/* section 5 */}

            <div className='section5'>
                <div className='<p>Back To School</p>'>
                    <p>Back To School</p>
                </div>
                
                <div className='Nikejustdoit'>
                <a href=''><img className='nikejustdoit' src={nikejustdoit} alt=""/></a>
                </div>

                <div className='BACKTOSCHOOL'>
                    <h1><a href=''><b>BACK-TO-SCHOOL</b></a></h1>
                </div>

                <div className='ESSENTIALS'>
                    <h1><a href=''><b>ESSENTIALS</b></a></h1>
                </div>

                <div className='Everything'>
                    <p><a href=''>Eveything you need to bring your best on your first day back</a></p>
                </div>

                <div className='sho'>
                    <button className='myshop'><a href=''>Shop</a></button>
                </div>

                <div className='Exp'>
                    <button className='explore'><a href=''>Explore</a></button>
                </div> 
            </div>

            
            {/* section 6 */}
            <div className='section6'>
                <div className='BestSellingApparel'>
                    <p>Best Selling Apparel</p>
                </div>
            </div>


            {/* section 7 */}

            <div className='wears'>
                <div className='womenswear'>
                    <a href=''><img className='womenswear' src={womenswear} alt=""/></a>

                    <div className='women'>
                        <div className='NikeSportswearEssentials'>
                            <p>Nike Sportswear Essentials</p>
                        </div>
                        
                        <div className='dollar30'>
                            <p>$30</p>
                        </div>
                    </div>

                    <div className='WomensCroppedLogo'>
                        <p>Women's Cropped Logo T-shirt</p>
                    </div>

                </div>


                <div className='womenshortwear'>
                    <a href=''><img className='womenshortwear' src={womenshortwear} alt=""/></a>

                    <div className='women'>
                        <div className='NikeSportswearEssentials'>
                            <p>Nike Sportswear Phoenix Fleece</p>
                        </div>
                        
                        <div className='dollar30'>
                            <p>$55</p>
                        </div>
                    </div>

                    <div className='WomensCroppedLogo'>
                        <p>Women's High-Waisted-Loose-Fit Shorts</p>
                    </div>   
                </div>

                <div className='menswear'>
                    <a href=''><img className='menswear' src={menswear} alt=""/></a>

                    
                    <div className='women'>
                        <div className='NikeSportswearEssentials'>
                            <p>Nike Sportswear JDI</p>
                        </div>
                        
                        <div className='dollar30'>
                            <p>$25</p>
                        </div>
                    </div>

                    <div className='WomensCroppedLogo'>
                        <p>Men's Shirt</p>
                    </div>
                </div>
            </div>

            
            {/* section 8 */}

            <div className='section8'>
                <div className='NikeRunning'>
                    <p>Nike Running</p>
                </div>

                <div className='nikeRunning'>
                    <a href=''><img src={NikeRunning} alt=""/></a>
                </div>
            </div>

            {/* section 9 */}
            
            <div className='section9'>
                <div className='nikeairzoom'>
                    <h1><a href=''><b>NIKE AIR ZOOM</b></a></h1>
                    <h1><a href=''><b>PEGASUS 39</b></a></h1> 
                </div>

                <div className='Tried'>
                    <p><a href=''>Tried and tested for 40 years running.</a></p>
                </div>

                <div className='both'>
                <div className='op'>
                    <button className='ho'><a href=''>Shop</a></button>
                </div>

                <div className='Find'>
                    <button className='find'><a href=''>Find Your Running Shoe</a></button>
                </div> 
                </div>
            </div>

            {/* section 10 */}

            <div className='section10'>
                <p>Popular Right Now</p>
            </div>

            {/* section 11 */}

            <div className='section11'>
               <div className='airmaxplus'>
                    <a href=''><img className='airmaxplus' src={airmaxplus} alt=""/></a>

                    <div className='shoe'>
                        <div className='NikeAirmaxPlus'>
                            <p>Nike Airmax Plus</p>
                        </div>

                        <div className='dollar175'>
                            <p>$175</p>
                        </div>
                    </div>
                    
                    <div className='shoes'>
                        <p>Men's</p>
                    </div>
               </div>


               <div className='airmaxplus'>
                <a href=''><img className='airmaxplus' src={airforce} alt=""/></a>

                <div className='shoe'>
                        <div className='NikeAirmaxPlus'>
                            <p>Nike Air Foce 1'07</p>
                        </div>

                        <div className='dollar175'>
                            <p>$110</p>
                        </div>
                    </div>
                    
                    <div className='shoes'>
                        <p>Women's Shoe</p>
                    </div>
               </div>

               <div className='airmaxplus'>
                <a href=''><img className='airmaxplus' src={airmax} alt=""/></a>

                <div className='shoe'>
                        <div className='NikeAirmaxPlus'>
                            <p>Nike Airmax 270</p>
                        </div>

                        <div className='dollar175'>
                            <p>$130</p>
                        </div>
                    </div>
                    
                    <div className='shoes'>
                        <p>Big Kid's Shoe</p>
                    </div>
               </div>
            </div>

            {/* section 12 */}
            <div className='section12'>
                <div className='FeaturedFootwear'>
                    <p>Featured Footwear</p>
                </div>
            </div>


            {/* section13  */}
            <div className='section13'>
                <div className='nikeshoe'>
                    <div className='blacknikeshoe'>
                        <a href=''><img className='blacknikeshoe' src={blacknikeshoe} alt=""/></a>
                    </div>

                    <div className='rednikeshoe'>
                        <a href=''><img src={rednikeshoe} alt=""/></a>
                    </div>
                </div>

                <div className='shoesalways'>
                    <p>Shoes Always <br></br>$100 & Under</p>
                    
                    <div>
                        <button className='me'>shop</button>
                    </div>
                </div>

                <div className='KD15'>
                    <p>KD15 Community<br></br>'Napheesa Collier'</p>
                    
                    <div>
                        <button className='mee'>shop</button>
                    </div>
                </div>
            </div>


            {/* section 14 */}
            
            <div className='section14'>
                <p>Summer Essential: Shorts</p>
            </div>

            {/* section15 */}

            <div className='section15'>
                <div>
                    <a href=''><img className='womenshort' src={womenshort} alt=""/></a>

                    <div className='woman'>
                        <p>Women's Short</p>
                    </div>
                </div>

                <div>
                    <a href=''><img className='kidsshort' src={kidsshort} alt=""/></a>
                    <div className='kid'>
                        <p>kids</p>
                    </div>
                </div>

                <div>
                    <img className='menshort' src={menshort} alt=""/>
                    <div className='man'>
                        <p>Men's Short</p>
                    </div>
                </div>
            </div>

            {/* section 16 */}
            
            <div className='section16'>
                <p>Nike Membership</p>
            </div>

            {/* section 17 */}

            <div className='section17'>
                <div>
                    <a href=''><img className='blacknikelogo' src={blacknikelogo} alt=""/></a>
                </div>

                <div className='become'>
                    <h1>BECOME A</h1>
                </div>

                <div className='member'>
                    <h1>MEMBER</h1>
                </div>

                <div className='signup'>
                    <p>Sign up for Free. Join the community. Never pay for shipping</p>
                </div>

                <div className='Join'>
                    <button className='joinUs'>Join Us</button>
                </div>
            </div>

            {/* section 18 */}

            <div className='section18'>
                <div>
                    <a href=''><img className='firstaccess' src={firstaccess} alt=""/></a>
                    
                    <div className='membershop'>
                        <p>Member Shop</p>
                    </div>

                    <div className='shopmember'>
                        <p>Shop Member-exclusive <br></br>styles.</p>
                    </div>  
                </div>

                <div>
                    <a href=''><img className='shopping' src={shopping} alt=""/></a>
                    <div className='Shipping'>
                        <p>Shipping as it Should Be</p>
                    </div>
                    <div className='freestandard'>
                        <p>Free Standard Shipping on <br></br>on all oders.</p>
                    </div>
                </div>
                
                <div>
                    <a href=''><img className='nikebyYou' src={nikebyYou} alt=""/></a>
                    <div className='NikeByYou'>
                        <p>Nike By You</p>
                    </div>
                    <div className='Customize'>
                        <p>Customize your so-you <br></br>Shoe.</p>
                    </div>
                </div>
            </div>

            <div>
                <img className='footer1image' src={footer1image} alt=""/>
                <img className='footer2image' src={footer2image} alt=""/>
            </div>



           


           
            


















        </div>
    </>
  )
}

export default Nike
