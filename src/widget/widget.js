import { getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget00.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)

    draw.rect().size(1000,1000).move(1,1).fill(nextColor())

    //quadrado superior esquerdo
    draw.rect().size(300,300).move(100,100).fill(nextColor())
    draw.rect().size(250,250).move(125,125).fill(nextColor())
    draw.rect().size(200,200).move(150,150).fill(nextColor())
    draw.rect().size(50,50).move(185,185).fill(nextColor())
    draw.rect().size(50,50).move(265,185).fill(nextColor())
    draw.rect().size(50,50).move(225,250).fill(nextColor())

    //quadrado superior direito
    draw.rect().size(300,300).move(600,100).fill(nextColor())
    draw.rect().size(250,250).move(625,125).fill(nextColor())
    draw.rect().size(200,200).move(650,150).fill(nextColor())
    draw.rect().size(50,50).move(685,185).fill(nextColor())
    draw.rect().size(50,50).move(765,185).fill(nextColor())
    draw.rect().size(50,50).move(725,250).fill(nextColor())


    draw.circle().size(284).move(359,359).fill(nextColor())
    
    //quadrado inferior esquerdo
    draw.rect().size(300,300).move(100,600).fill(nextColor())
    draw.rect().size(250,250).move(125,625).fill(nextColor())
    draw.rect().size(200,200).move(150,650).fill(nextColor())
    draw.rect().size(50,50).move(185,685).fill(nextColor())
    draw.rect().size(50,50).move(265,685).fill(nextColor())
    draw.rect().size(50,50).move(225,750).fill(nextColor())

    //quadrado inferior direito
    draw.rect().size(300,300).move(600,600).fill(nextColor())
    draw.rect().size(250,250).move(625,625).fill(nextColor())
    draw.rect().size(200,200).move(650,650).fill(nextColor())
    draw.rect().size(50,50).move(685,685).fill(nextColor())
    draw.rect().size(50,50).move(765,685).fill(nextColor())
    draw.rect().size(50,50).move(725,750).fill(nextColor())

    // Descomente linha abaixo para ver exemplo 0
    //sample(key,draw)
}

export default widget