function fixDate(iso) {
  let month = iso.substring(5, 7)
  let day = iso.substring(8, 10)
  let year = iso.substring(0, 4)
  return `${month}/${day}/${year}`
}

function fixTime(iso) {
  let hours = iso.substring(11, 13)
  let minutes = iso.substring(14, 16)
  let time
  if (hours <= 11) {
    time = `${hours}:${minutes} AM`
  }
  if (hours === 12) {
    time = `${hours}:${minutes} PM`
  }
  if( hours >= 13) {
    let newh = hours - 12
    time = `${newh}:${minutes} PM`
  }

  return time
}

export { fixDate }
export {fixTime }
