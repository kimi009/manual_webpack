import './a.css'
import './b.less'

import logo from '../assets/2.jpg'
let img = document.createElement('img')

img.src = logo
document.body.appendChild(img)

//实现es6--es5
const fn = () => {}

fn()

function log() {}

@log
class A {
  a = 1
}

[1, 2, 3].includes(1)

import './a'

class BB {}

const test = async () => {
  let s = await Promise.resolve(2)
  console.log(30, s)
  return s
}

const t1 = async () => {
  let m = await test()
  console.log(m)
  return m
}

console.log(t1())

console.log(await Promise.resolve(2))
