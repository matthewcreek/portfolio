import Image from 'next/image'

import github from '../../../public/Images/github-mark.png'
import linkedin from '../../../public/Images/LinkedIn-Logos/LI-In-Bug.png'
// import phone from '../../../public/Images/icons8-phone-100.png'
import mail from '../../../public/Images/icons8-mail-100.png'

export default function Resume() {
    return (
        <div className='flex justify-center'>
            <div className='max-w-4xl'>
                <div className="flex flex-col items-center leading-6">
                    <h1 className="w-full text-5xl text-center text-red-900 font-bold pb-2 border-b-4 border-red-800">Matthew Creek</h1>
                    <h3 className="text-xl py-2 font-semibold">Software engineer in St. Louis, MO</h3>
                    <p className="max-w-xl text-center">Seeking placement with a team that promotes growth in a highly changing field, working to solve problems creatively and efficiently.</p>
                </div>
                <div className="flex justify-center">
                    <div className='p-2 flex justify-around w-1/2 items-center'>
                        {/* <Image className='w-16 h-auto' src={phone} alt='Phone Icon' /> */}
                        <a href='mailto: matthew.creek27+dev@gmail.com'>
                            <Image className='w-16 h-auto' src={mail} alt='Mail Icon' />
                        </a>
                        <a href='https://github.com/matthewcreek'>
                            <Image className='w-16 h-auto' src={github} alt='Github logo'/>
                        </a>
                        <a href='https://www.linkedin.com/in/matthew-creek/'>
                            <Image className='w-16 h-auto' src={linkedin} alt='LinkedIn Logo' />
                        </a>
                    </div>
                </div>
                <div className='m-2 flex justify-around'>
                    <div className='w-2/3 p-2 flex flex-col'>
                        <div>
                            <h2 className='font-bold text-red-900 border-b-4 border-red-800'>PROJECT EXPERIENCE</h2>
                            <p className='pt-2'><span className='font-bold text-red-900'>Recipe Hive</span> -- ReactJS with Java Spring Boot SQL Database (LC101 Capstone Project)</p>
                            <ul className='list-disc pl-8 pb-4'>
                                <li>Mobile-friendly web app where users can add, view, edit, and remove their favorite recipes with search functionality using keywords.</li>
                                <li>Frontend written in JavaScript with React. Designed and styled using principles of atomic design. Utilizing Axios to make HTTP calls to a REST API secured with protected routing and JWT.</li>
                                <li>Backend REST API written in Java with Spring Boot. Utilizing JPA and Hibernate to communicate with MySQL Database to perform CRUD operations.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold text-red-900 border-b-4 border-red-800'>WORK EXPERIENCE</h2>
                            <p className='pt-2'><span className='font-bold text-red-900'>Studio Manager</span> -- Shock City Studios, St. Louis, MO</p>
                            <p>May 2015 - Present</p>
                            <ul className='list-disc pl-8 pb-4'>
                                <li>Led a growing team of audio engineers through daily challenges of customer service, accounting, scheduling, and problem solving.</li>
                                <li>Promoted growth in revenue 10-20% year-over-year by exploring new technologies, utilizing interactive management styles, and maintaining software and hardware needs.</li>
                                <li>Invoked lateral thinking and problem solving skills to ensure delivery of materials under time constraints.</li>
                                <li>Successfully integrated with various technical vendors to grow skills and knowledge base well beyond expectation.</li>
                                <li>Performed community outreach to promote interest in the recording industry and give back to those unable to continue education through traditional channels.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold text-red-900 border-b-4 border-red-800'>EDUCATION</h2>
                            <p className='pt-2'><span className='font-bold text-red-900'>LaunchCode,</span> LC101 Programming Course -- 2023</p>
                            <p><span className='font-bold text-red-900'>Webster University,</span> BFA, Audio Engineering -- 2013</p>
                        </div>
                    </div>
                    <div className='w-1/3 p-2 flex flex-col'>
                        <div>
                            <h2 className='font-bold text-red-900 border-b-4 border-red-800'>SKILLS</h2>
                            <div>
                                <h3 className='pt-2 font-bold text-red-900'>PROGRAMMING LANGUAGES</h3>
                                <ul className='list-disc pl-8 pb-2'>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>Java</li>
                                    <li>SQL</li>
                                    <li>HTML5/CSS3</li>
                                    <li>JSX</li>
                                </ul>
                                <h3 className='font-bold text-red-900'>FRAMEWORKS</h3>
                                <ul className='list-disc pl-8 pb-2'>
                                    <li>ReactJS</li>
                                    <li>Next.js</li>
                                    <li>T3</li>
                                    <li>AngularJS</li>
                                </ul>
                                <h3 className='font-bold text-red-900'>DATABASES</h3>
                                <ul className='list-disc pl-8 pb-2'>
                                    <li>MySQL</li>
                                </ul>
                                <h3 className='font-bold text-red-900'>TOOLS</h3>
                                <ul className='list-disc pl-8 pb-2'>
                                    <li>Git</li>
                                    <li>Visual Studio Code</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold text-red-900 border-b-4 border-red-800'>AWARDS</h2>
                            <div className='pt-2'>
                                <h3 className='font-bold text-red-900'>Better Business Bureau&apos;s Torch Award (2016 & 2021)</h3>
                                <p>Celebrating exceptional ethics and service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}