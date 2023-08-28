import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Community')
page.append(title)

const BUTTON_DATA = [
  { id: 1, title: 'Knowledge base' },
  { id: 2, title: 'Information' },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  const tabs = createElement('div', 'tabs')
  postList.append(tabs)

  BUTTON_DATA.forEach((button) => {
    const tabsButton = createElement(
      'button',
      `tabs__button--${button.id} button`,
    )
    const tabsTitle = createElement(
      'h2',
      'tabs__title',
      button.title,
    )
    tabsButton.append(tabsTitle)

    tabs.append(tabsButton)
  })

  const card = createElement('div', 'card')
  const cardImg = createElement('img', 'card__img')
  cardImg.src = 'https://picsum.photos/200/100'

  const cardTitle = createElement(
    'h3',
    'card__title',
    'Lorem ipsum dolor sit.',
  )
  const cardDescription = createElement(
    'p',
    'card__description',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error in eius illo, alias tempore hic minima perferendis impedit facilis aspernatur labore nemo atque dolorum omnis consequatur soluta beatae molestiae amet.',
  )

  const cardButton = createElement(
    'button',
    'card__button',
    'Go to the Telegram community',
  )

  card.append(
    cardImg,
    cardTitle,
    cardDescription,
    cardButton,
  )

  postList.append(tabs, card)

  return postList
}

const post = createPost()
page.append(post)
