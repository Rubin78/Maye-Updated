// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// class Second extends Component {
//     render() {
//         console.log(this.props);
//         return (



            
//             <div>
//                 <Link to="/third" >Go to the third page</Link>

//         <div>{this.props.location.state}</div>
//             </div>
//         );
//     }
// }

// export default Second;








import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody

} from 'reactstrap';
import Particles from 'react-particles-js';
import { AnimationWrapper } from 'react-hover-animation'
import { Container, Row, Col} from 'reactstrap';
import styles  from '../components/Second.css'
import blue from '../assests/blue.jpg';
import reactjs1 from '../assests/reactjs1.gif';
import reactjs from '../assests/reactjs.gif';
import html5 from '../assests/html5.gif';
import article from '../assests/article.png';
import testing from '../assests/testing.gif';
import flex from '../assests/flex.gif';
import css31 from '../assests/css31.gif';
import snoop from '../assests/snoop.png';
import Aos from "aos";
import Typed from 'react-typed';

import 'aos/dist/aos.css'; // You can also use <link> for styles

import download from '../assests/download.png';
import unnamed from '../assests/unnamed.png';
import bitbucket from '../assests/bitbucket.gif';
import github from '../assests/github.gif';
import boostrap from '../assests/boostrap.gif';
import hero1 from '../assests/hero1.jpg';
import car from '../assests/car.jpeg';
import bc from '../assests/bc.jpg';
import color from '../assests/color.jpg';
import logo1 from '../assests/logo1.png';
import tosee2 from '../assests/tosee2.webp';
import freepic from '../assests/freepic.jpg';
import { Hidden } from '@material-ui/core';
import { FaBeer,FaFontAwesome } from 'react-icons/fa';

import { Wave ,Random} from 'react-animated-text';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
useEffect(()=>{

  Aos.init({duration:2000});
},[]);





  return (


<div>
<Container fluid  className="containerBody2" id="#container1" style={{  backgroundImage:`url(${hero1})`}}>

    <div className="particle">
    <Particles
        canvasClassName="particlesCanva"
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0.5,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                anable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />

{/* <========= HEADER START====================> */}

            <Navbar  data-aos="fade-right" color="red"  light expand="md"  className="navbar">
            <NavbarBrand href="/"><h4  className="textheader1" >Rubin Shaikh</h4></NavbarBrand>
            <NavbarToggler onClick={toggle} style={{color:'white',backgroundColor:'#F5F5F5'}} />
            <Collapse isOpen={isOpen} navbar >
            <Nav className="mr-auto" navbar></Nav>

        <NavLink  href="#container1"  className="textheader" >Home</NavLink>
        <NavLink href="#container2" className="textheader">About</NavLink> 
        <NavLink href="#container3" className="textheader">Skills</NavLink>
        <NavLink href="#container5" className="textheader">Experience</NavLink>
        <NavLink href="#container6" className="textheader">Project</NavLink>
        <NavLink href="#container7" className="textheader">Contact</NavLink>
        </Collapse>
        </Navbar>
        
        {/* <========= HEADER  END====================> */}
        </div>




{/* <========= TEXT SART====================> */}
 




<Col sm="5"  style={{ display:'flex',
alignItems:'space-between',justifyContent:'center',paddingLeft:40,}}>
  
<div style={{display:'flex',height:450,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start',marginBottom:20,}} > 

    <div data-aos="fade-down-right"  style={{color:'white',fontSize:42,textAlign:'center',fontFamily:"Patua One",fontWeight:"bolder",letterSpacing:'.20em'}} >
    {/* <div style={{color:'#ffffff',fontSize:15,textAlign:"left",letterSpacing:'.1em',paddingLeft:60}}>HELLO,</div> */}
      
      DESIGN +
   <p style={{paddingBottom:-20}}></p>
   <Typed
                    strings={['INNOVATION']}
                    typeSpeed={40}
                    color={'white'}
                />
                <br/>
 
                <Typed 
                strings={[
                    ' Frontend Developer',
                    'Web Designer',
                  ]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text" style={{backgroundColor:'transparent',color:'white',fontSize:18,textAlign:'center',borderColor:'transparent'}} />
                </Typed>
   </div>
    {/* <button onClick={this.submitHandler} >go to second page</button> */}
    </div>
    
</Col>


 
{/* <Col sm="5"  className="designinnovation">
<div className="designiinovationinside"  > 

            <div data-aos="fade-down-right"  className="fonttextdesign"
            style={{fontFamily:"Patua One"}} >
            DESIGN +
            <p className="paddingdesign"></p>

            <Typed
                  strings={['INNOVATION']}
                  typeSpeed={40}
                  color={'white'}
                  />
                  <br/>
 
                  <Typed 
                  strings={[
                  ' Frontend Developer',
                  'Web Designer',
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop >
                  <input type="text" className="inputtxt"/>
                   </Typed>
                  </div>


    {/* <button onClick={this.submitHandler} >go to second page</button> */}
          {/* </div>
          </Col> */} */}
                 {/* <========= TEXT SART====================> */}
    </Container>


                {/* <========= COntain ONE END====================> */}








                   {/* <========= ABOUT ME START===================> */}

<Container fluid   id="container2" style={{  backgroundImage:`url(${tosee2})`,backgroundColor:'red'}}>
          <Row >
          <Col md="12">
          <div className="aboutmeheadertextheight">
          <h1  data-aos="fade-left"  className="Aboutme">ABOUT ME</h1>
          </div>
          <Row>

          <Col md="6" sm="6" className="container2column" style={{}} >
          <Col sm="12" className="photoheight" classID="container2insider" >
            ssjs
          </Col>
          </Col>

            <Col md="6" sm="6" className="container2column">

            <Col sm="12" classID="container2insider">
            <Col sm="8" className="container2insideitem">
            <h6 className="seondfontfamily" >Hi there! I am Rubin Shaikh</h6></Col>
            <Col sm="8" className="mydetailsstyle">
            A passionate programmer , born and brought up in India. I am a  Web Developer with React.js, React.Native, Flex,Boostrap4,Html5,Css3.
            I am Currently  Working in Snoop Technologies Pvt. Ltd.
            I successfully completed my Engineering with specialization in 'Information Technology'
            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
            Along with that, I also help people as a COACH on their journey of becoming a professional programmer. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
            </Col>
            <div></div>

            </Col>
            </Col>
            </Row>
            </Col>
            </Row>
       </Container>


     {/* <========= ABOUTME END====================> */}



     {/* <========= experiencehosting platform====================> */}

<Container fluid className="container3" id="container3" >

          <Row>
          <Col md="12">
          <div className="techicalskills">
          <h1 data-aos="fade-up-left" className="Aboutme">TECH SKILLS</h1>
          </div>
          </Col>
          </Row>
           <Row>

  <Col md="12" className="Container2frontend">


          <h1 data-aos="fade-up-right" className="frontendfont">FRONT END</h1>

          <CardDeck   data-aos="fade-up-right"   data-aos="flip-left"   >

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={reactjs1}  />
          <CardText className="cardinside">
          <h5 className="Aboutme">React.js</h5>
          </CardText>
          </Card>

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={reactjs}   />
          <CardText className="cardinside">
          <h5 className="Aboutme">React Native</h5>
          </CardText>
          </Card>

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={html5}  />
          <CardText  className="cardinside">
          <h5 className="Aboutme">Html5</h5>
          </CardText>
          </Card>

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={flex}  />
          <CardText className="cardinside"><h5 className="Aboutme">Flex</h5>
          </CardText> 
          </Card>

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={boostrap} />
          <CardText className="cardinside">
          <h5 className="Aboutme">Boostrap4</h5>
          </CardText> 
          </Card>

    </CardDeck>


        <div className="emptyspace">
        </div>


    <CardDeck data-aos="fade-up-right" data-aos="flip-left"  >

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={testing}  />
          <CardText className="cardinside">
          <h5 className="Aboutme">JavaScript</h5>
          </CardText>
          </Card>

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={article}  />
          <CardText className="cardinside">
          <h5 className="Aboutme">Reactstrap</h5>
          </CardText>
          </Card>

          <Card>
          <CardImg className="imgcardradius" top width="100%" height="80%" src={css31}  />
          <CardText className="cardinside">
          <h5 className="Aboutme">Css3</h5>
          </CardText>
          </Card>


          <Card style={{backgroundColor:'black'}}>
          </Card>
          <Card  style={{backgroundColor:'black'}}>
          </Card>

    </CardDeck>
    
    </Col>

</Row>
</Container>

     {/* <========= experience  end ====================> */}


                 {/* <========= experiencehosting platform start====================> */}



<Container fluid   className="container4" >

<Col md="12">
<div className="hostingtextheader" >
    <h1 data-aos="fade-up-left" className="Aboutme">Hosting Platform</h1>
    </div>
    <CardDeck data-aos="fade-up-left"  data-aos="flip-left" > 

    <Card>
    <CardImg className="imgcardradius" top width="100%" height="80%" src={github} />
    <CardText className="cardinside"><h5 className="Aboutme">GitHub</h5></CardText></Card>
    <Card>
    <CardImg className="imgcardradius" top width="100%" height="80%" src={download} />
    <CardText className="cardinside"><h5 className="Aboutme">000webhost</h5></CardText></Card>
    <Card>
    <CardImg className="imgcardradius" top width="100%" height="80%" src={bitbucket}   />
    <CardText className="cardinside"><h5 className="Aboutme">BitBucket</h5></CardText>  </Card>
    <Card >
    <CardImg className="imgcardradius" top width="100%" height="80%" src={unnamed} />
    <CardText className="cardinside"><h5 className="Aboutme" >Pythonanywhere</h5></CardText>  
    </Card>
<Card style={{backgroundColor:'black'}}></Card>
</CardDeck>
</Col> 

</Container>


{/* <========= end experiencehosting platform====================> */}








<Container fluid  md="12" sm="12"   className="container5" id="container5" style={{  backgroundImage:`url(${color})` }} >
<Col md="12">

<div style={{height:150,display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
      <h1 data-aos="fade-up"
     data-aos-anchor-placement="Top-center" className="Aboutme">Experience</h1>
    

    </div>

    <div  md="12" className="expcard" style={{backgroundColor:'red'}} >
    <Col md="12" sm="12" className="expcardinside">
    <Col md="7" sm="12"   className="expcardinsideitem">

{/* start here */}

        <Col md="12" style={{borderRadius:8}}>
        <Row style={{justifyContent:'center',display:'flex',}}>
        <Col md="3" data-aos="fade-up-left" className="expimg" style={{backgroundImage:`url(${snoop})`}}></Col>
        <Col md="7.5" data-aos="fade-left" className="expimg1">
        <h2 className="Aboutme1">Snoop Technologies Pvt. Ltd.</h2></Col>
        </Row>
        </Col>


      <Card md='12' sm="12"  style={{height:230,padding:5,display:'flex',alignItems:'center',justifyContent:'center',borderColor:'transparent',backgroundColor:'transparent'}}>
      <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Col md="8" sm="12" className="textofdowncardsnoop"><h3> Junior Software Developer</h3></Col>
      <Col md="8" sm="12" className="textofdowncardsnoop"><h6><b>Domain:</b> Frontend Developer </h6></Col>
      <Col md="8" sm="12" className="textofdowncardsnoop"><h6><b>Description :</b>Solving real-time problems occuring in production related to UI</h6></Col>
      <Col md="8" sm="12" className="textofdowncardsnoop"><h6><b>Technology:</b> React Native, React.js , JavaScript,html5,Css3 </h6></Col>
      <Col md="8" sm="12" className="textofdowncardsnoop"><h6><b>Duration:</b> August 2019 - Present </h6></Col>
      </Row>
      </Card>
      </Col>
      </Col>

       </div>
       </Col>
    
    </Container>


{/* <========= PROJECT start====================> */}


<Container fluid className="container6" id="container6" style={{backgroundColor:'#ff5850'}}>


<Col md="12">
<div style={{height:100,display:'flex',justifyContent:'center',alignItems:'flex-end',color:'white',marginBottom:20}}>
      <h1 data-aos="fade-up-left" className="Aboutme">PROJECTS</h1>
    </div>
    <CardDeck data-aos="fade-up-left" data-aos="flip-up-right"> 
    <Card className="cardproject" >
        <CardImg   top width="100%" height="75%" src={logo1} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >    

        <div>
          <div className="textcolorbackground" >
            <Button  className="borderofbutttonremove"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>

</CardText> </Card>
<Card className="cardproject" style={{backgroundColor:'white'}} >
        <CardImg   top width="100%" height="75%" src={logo1} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >    

        <div>
          <div className="textcolorbackground" >
            <Button  className="borderofbutttonremove"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:72,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>

</CardText> </Card>
        <Card className="cardproject" >
        <CardImg top width="100%" height="77%" src={bitbucket} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >
          
        <div>
          <div  className="textcolorbackground" >
            <Button className="borderofbutttonremove"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>
          
          </CardText> </Card>


        <Card  className="cardproject" >
        <CardImg top width="100%" height="77%" src={unnamed} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} alt="Card image cap" />
        <CardText >
          
          
          
        <div>
          <div className="textcolorbackground" >
            <Button className="borderofbutttonremove"> Project Details</Button>{' '} </div>
        {/* <Button color="secondary">Details</Button>{' '} */}
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:60,backgroundColor:'blue',}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
       </div>
          
          </CardText>  
        </Card>
      
</CardDeck>
  
<div id="container7" style={{height:100,display:'flex',justifyContent:'center',alignItems:'flex-end',color:'white',marginBottom:20}}>
      <h1 data-aos="fade-up-left" className="Aboutme">Contact</h1>
    </div>


<Col md="12" style={{display:'flex',justifyContent:'center'}}>
    <Card  style={{height:130,width:"70%", display:'flex',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'blue',}}>
    <div style={{textAlign:'center'}}>
        <Button color="success">See Live</Button>{' '}
      <Button color="success">Source Code</Button>{' '}
      <Button color="success">Watch Video</Button>{' '}
      </div>
      
      </Card></Col>
<Col md="12" style={{height:80,display:'flex',justifyContent:'center',alignItems:'center'}}>

<h4 style={{color:"white"}}>© RUBIN SHAIKH    2020 </h4>.



  </Col>

  </Col> 


</Container>


    </div>
  );
}

export default Example;