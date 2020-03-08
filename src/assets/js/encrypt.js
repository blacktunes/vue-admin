/* eslint-disable */
import { sha3_256 } from 'js-sha3'

export function encrypt (str, num) {
  let startTime = new Date().getTime()
  let temp = str
  let i = 0
  while (i < num) {
     temp = sha3_256(temp)
    i++
  }
  let time = new Date().getTime() - startTime
  return temp
}
