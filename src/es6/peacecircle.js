const AVATAR_ME = '/images/avatar2.png'
const AVATAR_MOD = '/images/avatar_mod.png'

const createElementWithClass = (tag, className) => {
  const elem = document.createElement(tag)
  elem.className = className
  return elem
}

const newLine = (image, text, isPrompt = false) => {
  const line = createElementWithClass('div', 'line')
  if (isPrompt) line.classList.add('is-prompt')
  const img = createElementWithClass('img', 'img-circle')
  img.setAttribute('src', image)
  const bubble = createElementWithClass('div', 'bubble')
  bubble.innerText = text
  line.append(img)
  line.append(bubble)
  return line
}

const switchSpeakingUser = (oldName, newName) => {
  const oldUser = document.getElementById(oldName)
  const newUser = document.getElementById(newName)
  oldUser.classList.remove('active')
  newUser.classList.add('active')
}

const switchState = () => {
  const currentState = document.getElementById('state1')
  const nextState = document.getElementById('state2')
  currentState.classList.remove('active')
  nextState.classList.add('active')
  setTimeout(switchSpeaking, 500)
}

const switchSpeaking = () => {
  switchSpeakingUser('Me', 'Moderator')
  setTimeout(modSpeaks, 1200)
}

const modSpeaks = () => {
  const convo = document.getElementById('convo')
  const modSays = newLine(AVATAR_MOD, 'Why was this issue experienced as harm?', true)
  convo.append(modSays)
}

const leiaSpeaking = () => {
  switchSpeakingUser('Moderator', 'Leia')
}

const goToNext = () => {
  const convo = document.getElementById('convo')
  const replywrapper = document.getElementById('replywrapper')
  replywrapper.classList.add('hide')
  convo.classList.remove('speaking')

  const reply = document.getElementById('replybox').value
  const iSay = newLine(AVATAR_ME, reply)
  convo.append(iSay)

  setTimeout(switchState, 800)
}
