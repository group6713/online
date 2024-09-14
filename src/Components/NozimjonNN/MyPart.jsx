import "./NozimjonNN.css"
import logo1 from "./Img/1.png"
import logo2 from "./Img/2.png"
import logo3 from "./Img/3.png"
import logo4 from "./Img/4.png"
import logo5 from "./Img/5.png"
import logo6 from "./Img/6.png"
import logo7 from "./Img/7.png"
import logo8 from "./Img/8.png"
import logo9 from "./Img/9.png"

function MyPart() {
    return (
    <>
      <div className="NozimjonNN">
        <span className="N1">Elevate your <br /> SEO efforts.</span>
        <div className="Ngroup">
            <div className="miniGroup">
                <div className="log"><img src={ logo1 } /> <span className="wh">User-friendly dashboard</span><br /><br /><div className="gray">Perform complex SEO audits and <br /> optimizations with a single click.</div></div>
            </div>
            <div className="miniGroup">
                <div className="log"><img src={ logo2 } /> <span className="wh">Visual reports</span><br /><br /><div className="gray">Visual insights into your site’s <br /> performance.</div></div>
              </div>
            <div className="miniGroup">
                <div className="log"><img src={ logo3 } />  <span className="wh">Smart Keyword Generator</span><br /><br /><div className="gray">Automatic suggestions and the best <br /> keywords to target.</div></div>
            </div>
        </div>
        <div className="Ngroup">
            <div className="miniGroup">
                <div className="log"><img src={ logo4 } /> <span className="wh">Content evaluation</span><br /><br /><div className="gray">Simple corrections for immediate <br /> improvemens.</div></div>
            </div>
            <div className="miniGroup">
                <div className="log"><img src={ logo5 } /> <span className="wh">SEO goal setting</span><br /><br /><div className="gray">Helps you set and achieve SEO goals with <br /> guided assistance.</div></div>
              </div>
            <div className="miniGroup">
                <div className="log"><img src={ logo6 } />  <span className="wh">Automated alerts</span><br /><br /><div className="gray">Automatic notifications about your SEO <br /> health, including quick fixes.</div></div>
            </div>
        </div>
        <div className="Ngroup">
            <div className="miniGroup">
                <div className="log"><img src={ logo7 } /> <span className="wh">Link Optimization Wizard</span><br /><br /><div className="gray">Guides you through the process <br /> of creating and managing links.</div></div>
            </div>
            <div className="miniGroup">
                <div className="log"><img src={ logo8 } /> <span className="wh">One-click optimization</span><br /><br /><div className="gray">Perform complex SEO audits and <br /> optimizations with a single click.</div></div>
              </div>
            <div className="miniGroup">
                <div className="log"><img src={ logo9 } />  <span className="wh">Competitor reports</span><br /><br /><div className="gray">Provides insights into competitors’ <br /> keyword strategies and ranking.</div></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MyPart
