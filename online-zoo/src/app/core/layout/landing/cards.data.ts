import { IAnimalFeedCard } from '../../../features/feedcard/feedcard.model';
import { IPayAndFeedCard } from '../../../features/pay-and-feed-card/pay-and-feed-card.model';

export const payAndFeedCards: IPayAndFeedCard[] = [
  {
    number: '01',
    image: '/assets/pay-and-feed_image_1.png',
    icon: '/assets/pay-and-feed_icon_1.png',
    heading: 'Your donation has an impact',
    description:
      'Providing our animals with high-quality nutritious diets is just one element of animal care at our Zoo. We do all the best so that our animals can eat food similar to what they might find in their natural habitats while making sure they get the right mix of nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious food for our animals by donating. The generosity of people like you can help us make sure that our animals enjoy good food that keeps them in great condition.',
  },
  {
    number: '02',
    image: '/assets/pay-and-feed_image_2.png',
    icon: '/assets/pay-and-feed_icon_2.png',
    heading: 'Make a donation',
    description:
      "You can donate through your credit card without any fees. It is easy and safe. We do not keep donors' personal information on an online network. Choose an amount to give and the pet's name if needed. One of the most effective ways you can give is by making regular donations.",
  },
  {
    number: '03',
    image: '/assets/pay-and-feed_image_3.png',
    icon: '/assets/pay-and-feed_icon_3.png',
    heading: 'Bring your food charity — straight to your favorites pets.',
    description:
      'After your donation, the animal receives its favorite foods. You can support your favorite animals or any animal you care about and make a real personal impact. Never doubt that your donation can make a difference even if it is small. ',
  },
];

export const feedCards: IAnimalFeedCard[] = [
  {
    feedCardImgPath: '/assets/lucas_feedcard.png',
    feedCardDescription:
      'Your $30 could give Lucas a slice of panda cake, made with our secret recipe.',
  },
  {
    feedCardImgPath: '/assets/andy_feedcard.png',
    feedCardDescription:
      "With your support, we can give Andy his favorite fruits. Especially when it's not fruit season in its natural habitat.",
  },
  {
    feedCardImgPath: '/assets/eagles_feedcard.png',
    feedCardDescription:
      'Sam & Lora have hatched and raised numerous young and will be happy with your help.',
  },
  {
    feedCardImgPath: '/assets/senja_feedcard.png',
    feedCardDescription:
      'Your $150 will help to care for Senja, a Sumatran tiger, for three weeks.',
  },
];
