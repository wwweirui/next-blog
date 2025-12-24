import TimelineItem from './TimelineItem'

export const EXPERIENCES = [
  {
    org: '德邦证券股份有限公司',
    url: 'https://www.tebon.com.cn/main/index.html',
    logo: '/static/images/experiences/tebon-logo.png',
    start: 'July 2022',
    end: 'Present',
    title: 'Front-end development',
    icon: 'man-technologist',
    event: 'career-spartan',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>xxx</strong> - detail about work
          </li>
          <li>
            <strong>list about work</strong> - xxx
          </li>
        </ul>
      )
    },
  },
  {
    org: '辽宁大学',
    url: 'https://en.uit.edu.vn',
    logo: '/static/images/experiences/lnu-logo.png',
    start: 'September 2019',
    end: 'June 2022',
    title: '硕士研究生 - 软件工程(专硕)',
    icon: 'student',
    event: 'career-uit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Graduated
            <strong>School of Computer Science</strong>.
          </li>
        </ul>
      )
    },
  },
]

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
)

export default CareerTimeline
