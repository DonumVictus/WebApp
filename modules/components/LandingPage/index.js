import React from 'react'
import Title from 'react-title-component'
import TextContainer from './TextContainer'
import TopComponent from './TopComponent'
import BottomComponent from './BottomComponent'
import { body } from './styles.css'
import phone from './TextContainer/phones.png'
import trash from './TextContainer/trash.png'
import restaurant from './TextContainer/restaurant.jpg'
import purpose from './TextContainer/purpose.jpg'

export default React.createClass({
  render(){
    return (
      <div className={body}>
        <TopComponent />
        <TextContainer title="What's the problem?" info={probleminfo} grey={false} imgsrc={trash} />
        <TextContainer title="What's our solution?" info={solutioninfo} grey={true}  imgsrc={restaurant}/>
        <TextContainer title="How does it work?" info={workinfo} grey={false} imgsrc={phone}/>
        <TextContainer title="What's our purpose?" info={purposeinfo} grey={true}  imgsrc={purpose}/>
        <BottomComponent />
      </div>
    );
  }
})

const probleminfo = [{text: 'Restaurants have tons of food left over at the end of the day, and they often end up throwing it away. Meanwhile, there are many homeless shelters that would love to have the excess food.', key: 1}];
const solutioninfo = [{ text: 'Our solution is to allow restaurants to sign up to donate food, and people to donate to transport food from the restaurants to the homeless shelters. Our app connects these drivers to the restaurants and gives them a homeless shelter to drop the food off at', key: 1}]
const workinfo = [{ text: "People who'd like to drive food to the homeless shelters and restaurants who'd like to donate can download the app and sign up. Once signed up, they can choose which days they can donate/deliver food. The app will then notify them of where to go on those days to pick up and drop off food.", key: 1}]
const purposeinfo = [ {text: "Our purpose is to reduce the amount of food wasted by restaurants and give homeless shelters more food at the same time.", key: 1}]
