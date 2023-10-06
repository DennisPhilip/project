import React from 'react'
import i3 from './../../public/sja.jpg'
import Image from 'next/image'
import gsap from 'gsap'

export default function page() {
  return (
    <div className='header'>
        <h1 className='text-center justify-center mt-5 text-blue-700 text-8xl text font-mono shadow-lg shadow-blue-500'>ACHIEVEMENTS</h1>
    <div className='body flex flex-row flex-initial mt-5 '>
    <div className='w-1/4'><Image className='ml-3' src={i3} width={400} height={400}></Image></div>
    <div className='text flex-column ml-10 w-3/4 h-32'>
    <p className='text-slate-300 tracking-widest'><div className='t1 font-semibold text-white'> HONOURS and REWARDS </div> <br></br>

    1985: awarded National Medal of Technology (with Steve Wozniak) by US President Ronald Reagan, the country's highest honor for technological achievements[294] <br></br>
    1987: Jefferson Award for Public Service<br></br>
    1989: Entrepreneur of the Decade by Inc.<br></br>
    1991: Howard Vollum Award from Reed College<br></br>
    2004–2010: listed among the Time 100 Most Influential People in the World on five separate occasions<br></br>
    2007: named the most powerful person in business by Fortune magazine<br></br>
    2007: inducted into the California Hall of Fame, located at The California Museum for History, Women and the Arts<br></br>
    2012: Grammy Trustees Award, an award for those who have influenced the music industry in areas unrelated to performance<br></br>
    2012: posthumously honored with an Edison Achievement Award for his commitment to innovation throughout his career<br></br>
    2013: posthumously inducted as a Disney Legend<br></br>
    2017: Steve Jobs Theater opens at Apple Park<br></br>
    2022: posthumously awarded the Presidential Medal of Freedom by US President Joe Biden, the country's highest civilian honor</p><br></br>

<p className='text-slate-300 tracking-widest'><div className='t1 font-semibold text-white'> INNOVATIONS & designs </div><br></br>Jobs's design aesthetic was influenced by philosophies of Zen and Buddhism. In India, he experienced Buddhism while on his seven-month spiritual journey,[232] and his sense of intuition was influenced by the spiritual people with whom he studied.[232] Jobs gained insights regarding industrial designs from Richard Sapper.[233]

According to Apple co-founder Steve Wozniak, "Steve didn't ever code. He wasn't an engineer and he didn't do any original design...".[234][235] Daniel Kottke, one of Apple's earliest employees and a college friend of Jobs, stated: "Between Woz and Jobs, Woz was the innovator, the inventor. Steve Jobs was the marketing person."

He is listed as either primary inventor or co-inventor in 346 United States patents or patent applications related to a range of technologies from actual computer and portable devices to user interfaces (including touch-based), speakers, keyboards, power adapters, staircases, clasps, sleeves, lanyards, and packages. His contributions to most of his patents were to "the look and feel of the product". He and his industrial design chief Jonathan Ive are named for 200 of the patents. Most of these are design patents as opposed to utility patents or inventions; they are specific product designs such as both original and lamp-style iMacs, and PowerBook G4 Titanium. He holds 43 issued US patents on inventions. The patent on the Mac OS X Dock user interface with "magnification" feature was issued the day before he died. Although Jobs had little involvement in the engineering and technical side of the original Apple computers, Jobs later used his CEO position to directly involve himself with product design.

Involved in many projects throughout his career was his long-time marketing executive and confidant Joanna Hoffman, known as one of the few employees at Apple and NeXT who could successfully stand up to Jobs while also engaging with him.

Even while terminally ill in the hospital, Jobs sketched new devices that would hold the iPad in a hospital bed. He despised the oxygen monitor on his finger, and suggested ways to revise the design for simplicity.

Since his death, he has won 141 patents. He holds over 450 patents in total </p> <br></br>
<ol>
    <li>Apple I</li><br></br>
    <li>Apple II</li><br></br>
    <li>Apple Lisa</li><br></br>
    <li>Macintosh</li><br></br>
    <li>NeXT Computer</li><br></br>
    <li>iMac</li><br></br>
    <li>iTunes</li><br></br>
    <li>iPod</li><br></br>
    <li>iPhone</li><br></br>
    <li>iPad</li>
</ol>




    </div>
    </div>

    </div>
  )
}
