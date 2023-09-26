import {Dimensions} from 'react-native'

const params = {
    blocksize:30,
    bordersize:5,
    fontsize:15,
    headerRatio:0.15,
    difficultLevel:0.1,
    getcolumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width/this.blocksize)
    },
    getrowsamount(){
        const totalheight = Dimensions.get('window').height
        const boardheight = totalheight * (1- this.headerRatio)
        return Math.floor(boardheight/this.blocksize)
    }
}

export default params