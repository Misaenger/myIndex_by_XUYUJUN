// 颜色
let color = ['b', 'w', 'r', 'y', 'l', 'g', 'o',]  // 黑白红黄蓝绿橙
let colorArr = []
let num = [0,1,2,3,4,'g']    // 颜色层级数
color.forEach((v,i,arr)=>{   // 生成=》颜色二维数组
  let temArr = []
  num.forEach((v1,i1)=>{
    let temString = `${v}${v1}`
    temArr.push( temString )
  })
  let temObj = {
    name: v,
    arr: temArr
  }
  colorArr.push(temObj)
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~字体样式~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 字号
let getSizeArr = () =>{
  let min = 16;              // 定义=》最小字号
  let max = 100;              // 定义=》最大字号 
  let n = min;
  let sizeArr = []
  for ( var i = 0; i < 100; i++) {
    sizeArr.push(n)
    n += 2;
    if( n>max ){break;}
  }
  return sizeArr
}
let sizeArr = getSizeArr()
// 字重
let fontWeight = [ 'fw0', 'fw1' ]  // 定义=》字重数组

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~宽高~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 宽高前缀
let whArr = [ "W", "H" ]
// 获取长度单位数组
let getLengthArr = () =>{  
  let min = 10;               // 定义=》最小字号
  let max = 750;              // 定义=》最大字号 
  let n = min;
  let sizeArr = []
  for ( var i = 0; i < max; i++) {
    sizeArr.push(n)
    n += 1;
    if( n>max ){break;}
  }
  return sizeArr
}
let length = getLengthArr()
// 获取百分比/屏宽高比例数组
let getPercentageArr = () =>{  
  let min = 1;              // 定义=》最小字号
  let max = 100;              // 定义=》最大字号 
  let n = min;
  let sizeArr = []
  for ( var i = 0; i < 100; i++) {
    sizeArr.push(n)
    n += 1;
    if( n>max ){break;}
  }
  return sizeArr
}
let percentage = getPercentageArr()
// 获取em数组
let getEmArr = () =>{
  let min = 1;              // 定义=》最小字号
  let max = 50;              // 定义=》最大字号 
  let n = min;
  let sizeArr = []
  for ( var i = 0; i < 100; i++) {
    sizeArr.push(n)
    n += 1;
    if( n>max ){break;}
  }
  return sizeArr
}
let em = getEmArr()

// ~~~~~~~~~~~~~~~~~~~~~~~~~边距循环~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 边距样式
let mpStyle = [ 'M', 'P' ]  // 定义=》字重数组
// 边距方向
let direction = ['t', 'r', 'b', 'l', 'h', 'v',]
// 边距距离
let getDistanceList = () =>{  
  let min = 10;              // 定义=》最小字号
  let max = 500;              // 定义=》最大字号 
  let n = min;
  let sizeArr = [2, 4, 6, 8]
  for ( var i = 0; i < 100; i++) {
    sizeArr.push(n)
    n += 10;
    if( n>max ){break;}
  }
  return sizeArr
}
// 边距距离百分比样式/屏宽高样式
let distance = getDistanceList()
let distanceAuto = [...distance, 'auto']

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区块/按钮样式~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 边角
let radius = ['rd0', 'rd1', 'rd2', 'rd3', 'rd4', 'rd5']
// 颜色
// console.log(colorArr)
// 默认t，f调为实
let blkStyle = ['','_f']




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~生成字体样式函数~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getFontStyle = () =>{  // 总共四层循环=> .f_b1_30{font-weight:bold;color:#000000;font-size:30px;}
  let fontStyle_text = ''
  // 循环加粗
  fontWeight.forEach( ( f_value,f_index )=>{
    let styleStr = '.'
    if(f_index==0){
      styleStr += 'f_'
    }else{
      styleStr += 'F_'
    }
    // 循环颜色名
    colorArr.forEach( ( c_value,c_index )=>{
      // 循环颜色层级
      c_value.arr.forEach( ( c2_value,c2_index )=>{
        let tempStr = styleStr.substring(0,3)      // 控制每次循环都为一个长度为3的字符串
        tempStr += c2_value    // 使用一个临时变量截取替换color字符而非累加，因为是循环
        styleStr = tempStr + '_'
        // 循环字号
        sizeArr.forEach( ( s_value,s_index )=>{
          let tempSize = styleStr.substring(0,6)   // 控制每次循环都为一个长度为3的字符串
          tempSize += s_value    // 使用一个临时变量截取替换color字符而非累加，因为是循环
          styleStr = tempSize + `{font-weight:$${f_value};color:$${c2_value};font-size:${s_value}px;}`
          // 整合
          fontStyle_text += `${styleStr} \n`
        })
      })
    })
  })
  return fontStyle_text
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~生成边距样式函数~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getMarginStyle = () =>{   // 循环边距  => .M1{margin: 20px}
  let marginStyle_text = ''
  // 总共四层循环  
  mpStyle.forEach((v,i)=>{  // 循环边距样式
    let styleStr = '.'
    styleStr += v
    // 循环全边距  => .M1{margin: 20px}
    distance.forEach((v1,i1)=>{
      let tempSize = styleStr.substring(0,2)   // 控制每次循环都为一个长度为1的字符串
      tempSize += v1               // 使用一个临时变量截取替换color字符而非累加，因为是循环
      if( v=='M' ){
        styleStr = tempSize + `{margin:${v1}px;}`
      }else if( v=='P' ){
        styleStr = tempSize + `{padding:${v1}px;}`
      }
      marginStyle_text += `${styleStr} \n`
    })
    // 循环上、下、左、右、上下、左右边距 => .Ml2{margin-left:20px;}
    direction.forEach((v1,i1)=>{
      let tempSize = styleStr.substring(0,2)   // 控制每次循环都为一个长度为1的字符串
      tempSize += v1    // 使用一个临时变量截取替换color字符而非累加，因为是循环
      styleStr = tempSize
      distance.forEach((v2,i2)=>{
        let tempSize = styleStr.substring(0,3)   // 控制每次循环都为一个长度为1的字符串
        tempSize += v2    // 使用一个临时变量截取替换color字符而非累加，因为是循环
        // 转css格式
        v1 == 't' ? v1 = 'top' : v1 = v1;
        v1 == 'r' ? v1 = 'right' : v1 = v1;
        v1 == 'b' ? v1 = 'bottom' : v1 = v1;
        v1 == 'l' ? v1 = 'left' : v1 = v1;
        // 判断样式
        if( v=='M' ){
          // 先解决上下、左右对齐的,最后默认解决上下左右的
          if ( v1 == 'v' ){
            styleStr = tempSize + `{margin:${v2}px 0;}`
          } else if( v1 == 'h' ){ 
            styleStr = tempSize + `{margin:0 ${v2}px;}`
          } else { // .m_t20{margin-left:20px ;}
            styleStr = tempSize + `{margin-${v1}:${v2}px;}`
          }
        }else if( v=='P' ){
          // 先解决上下、左右对齐的,最后默认解决上下左右的
          if ( v1 == 'v' ){
            styleStr = tempSize + `{padding:${v2}px 0;}`
          } else if( v1 == 'h' ){  // .m_v20{margin:20px 0;}
            styleStr = tempSize + `{padding:0 ${v2}px;}`
          } else {  // .m_t20{margin-left:20px ;}
            styleStr = tempSize + `{padding-${v1}:${v2}px;}`
          }
        }
        // 整合
        marginStyle_text += `${styleStr} \n`
      })
    })
    // 循环上下_左右 => .M30_auto{margin-left:20px;}
    distanceAuto.forEach((v1,i1)=>{
      let tempSize = styleStr.substring(0,2)    // 控制每次循环都为一个长度为1的字符串
      tempSize += v1+'_'     // 使用一个临时变量截取替换color字符而非累加，因为是循环
      styleStr = tempSize
        // 循环左右
        distanceAuto.forEach((v2,i2)=>{
          let index = styleStr.indexOf("_")
          let tempSize1 = styleStr.slice(0, index+1)
          tempSize1 += v2    // 使用一个临时变量截取替换color字符而非累加，因为是循环
          // 判断方法
          v=='M'? v='margin' : v=v
          v=='P'? v='padding' : v=v
          var v1_
          var v2_
          v1=='auto' ? v1_ = 'auto' : v1_ = v1 + 'px'
          v2=='auto' ? v2_ = 'auto' : v2_ = v2 + 'px'
          styleStr = tempSize1 + `{${v}:${v1_} ${v2_};}`
          // 整合
          marginStyle_text += `${styleStr} \n`
        })
    })
  })
  return marginStyle_text
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~生成区块/按钮样式函数~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getBlockStyle = () =>{  // .blk0_r0_f
  let blkStyle_text = ''
  // 循环边角
  radius.forEach((v,i)=>{
    let styleStr = '.blk'
    styleStr += i + '_'
    colorArr.forEach((v1,i1)=>{
      v1.arr.forEach((v2,i2)=>{
        let index = styleStr.indexOf("_")
        let tempSize = styleStr.slice(0, index+1)
        tempSize += v2    // 使用一个临时变量截取替换color字符而非累加，因为是循环
        blkStyle.forEach((v3,i3)=>{
          if( v3 == '_f' ){
            blkStyle_text += `${tempSize}_f{border-radius:$${v};border:1px solid $${v2};background:transparent;} \n`
          }else{
            blkStyle_text += `${tempSize}{border-radius:$${v};border:none;background:$${v2};} \n`
          }
        })
      })
    })
  })
  return blkStyle_text
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~生成宽高样式函数~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let sizeStyle_text = ''    // 生成宽高样式
let getSizeStyle = () =>{ // .S2_Frg{width:var(--XLw);height:var(--XLh);font-size:var(--XLf);border-radius:var(--XLf);background:transparent;color:var(--r0);border: 4px solid red;}
  // 总共四层循环  
  // 循环大小
  whArr.forEach((v,i)=>{
    let styleStr = '.'
    styleStr += v
    v == 'W' ? v = 'width' : v=v;
    v == 'H' ? v = 'height' : v=v;
    // rpx循环
    length.forEach((v1,i1)=>{
      let tempStr = styleStr.substring(0,2)      // 控制每次循环都为一个长度为3的字符串
      tempStr += v1   // 使用一个临时变量截取替换color字符而非累加，因为是循环
      styleStr = tempStr
      styleStr += `{${v}:${v1}px}`
      sizeStyle_text += `${styleStr} \n`
    })
    // %循环
    percentage.forEach((v1,i1)=>{
      let tempStr = styleStr.substring(0,2)      // 控制每次循环都为一个长度为3的字符串
      tempStr += v1   // 使用一个临时变量截取替换color字符而非累加，因为是循环
      styleStr = tempStr
      styleStr += `p{${v}:${v1}%}`
      sizeStyle_text += `${styleStr} \n`
    })

    // 屏幕尺寸循环
    percentage.forEach((v1,i1)=>{
      let view = 'vw'
      v == 'width' ? view = 'vw' :  view = 'vh'
      v == 'height' ? view = 'vh' :  view = 'vw'

      let tempStr = styleStr.substring(0,2)      // 控制每次循环都为一个长度为3的字符串
      tempStr += v1   // 使用一个临时变量截取替换color字符而非累加，因为是循环
      styleStr = tempStr
      styleStr += `v{${v}:${v1}${view}}`
      sizeStyle_text += `${styleStr} \n`
    })

    // 屏幕尺寸循环
    em.forEach((v1,i1)=>{
      let view = 'vw'
      v == 'width' ? view = 'vw' :  view = 'vh'
      v == 'height' ? view = 'vh' :  view = 'vw'

      let tempStr = styleStr.substring(0,2)      // 控制每次循环都为一个长度为3的字符串
      tempStr += v1   // 使用一个临时变量截取替换color字符而非累加，因为是循环
      styleStr = tempStr
      styleStr += `em{${v}:${v1}em!important}`
      sizeStyle_text += `${styleStr} \n`
    })
  })
  // console.log(sizeStyle_text)
  return sizeStyle_text
}

let styleString = getFontStyle() + getMarginStyle() + getBlockStyle() + getSizeStyle() // 整合成一个
//  console.log(styleString)






// **************************************定位文件路径*********************************************************************************
const path = require('path')
let file1 = path.resolve(__dirname, '../src/assets/styles/common_base.scss') // 读取手写初版
let file2 = path.resolve(__dirname, '../src/assets/styles/common.scss')  // 整合生成样式写入整体
// 读取、写入数据
const fs = require('fs')
// var minify = require('html-minifier').minify;   // 压缩文件
// 读取数据
fs.readFile( file1, 'utf8' ,(err, data) => {
  data += styleString
  // 异步写入数据到文件
  fs.writeFile(file2,data, err => {})
})
// minify(data,{pxoveComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true}) 
