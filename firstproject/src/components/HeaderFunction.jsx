import React, { useContext } from 'react'
import "../style.css"
import { ThemeContext } from '../ThemeContext'

export default function HeaderFunction() {

  const {theme, toggleTheme} = useContext(ThemeContext)
  const buttonText = theme === "light" ? "🌙  Dark Mode" : "☀️  Light Mode"
  const styles = {
    light:{backgroundColor:"white",color:"black"},
    dark:{backgroundColor:"black",color:"white"},
  }

 

    {/* STYLING 2ND OPTION --> INTERNAL CSS */}
    const headerCss = {
      color: "red",
      height: "45vh",
      backgroundColor: "black",
      padding: "10px",
    }
  return (
     <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-md">
              <div className="card-body text-center">
                <h2 className="card-title mb-3">Header Function from Router</h2>
                {/* Theme Ops with Context */}
                <button type='button' onClick={toggleTheme} className='btn btn-outline-info d-block m-3 w-50 mx-auto' style={{'maxWidth':'300px'}}> {buttonText} </button>
                <div style={styles[theme]}>
                  <h4> Theme Ops</h4>
                    <p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam velit minima commodi! Natus reprehenderit rem sint perspiciatis rerum, esse facilis beatae consequatur sapiente, architecto sequi, quaerat iusto quas ex.</span><span>Quisquam omnis animi ducimus voluptatibus. Ex numquam rerum labore quam, cum vero. Obcaecati quaerat temporibus, perspiciatis exercitationem aliquam a quisquam sit non, voluptatibus saepe quasi iure? Sunt dolore delectus deleniti?</span><span>Debitis, modi, magni autem commodi quis optio assumenda nobis recusandae eum aperiam sapiente atque aspernatur natus libero vel? Cumque, nam quos consectetur magni sapiente dolor veritatis delectus temporibus laborum esse.</span>
                    </p>
                  </div>
                {/* STYLING 1ST OPTION --> INLINE CSS */}
                <h4> INLINE CSS</h4>
                <p style={{color:'blue'}}>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam velit minima commodi! Natus reprehenderit rem sint perspiciatis rerum, esse facilis beatae consequatur sapiente, architecto sequi, quaerat iusto quas ex.</span><span>Quisquam omnis animi ducimus voluptatibus. Ex numquam rerum labore quam, cum vero. Obcaecati quaerat temporibus, perspiciatis exercitationem aliquam a quisquam sit non, voluptatibus saepe quasi iure? Sunt dolore delectus deleniti?</span><span>Debitis, modi, magni autem commodi quis optio assumenda nobis recusandae eum aperiam sapiente atque aspernatur natus libero vel? Cumque, nam quos consectetur magni sapiente dolor veritatis delectus temporibus laborum esse.</span>
                </p>

                <h4>INTERNAL CSS</h4>
                <p style={{ ...headerCss, fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum inventore, ipsa aliquid reiciendis magni amet quaerat sint quod! Velit quis eligendi fugiat, saepe fugit aliquid modi reprehenderit voluptatibus blanditiis?
                At nulla dicta, odio deserunt nam minima ea laudantium sapiente deleniti soluta harum facere porro est libero repellendus dolor impedit consectetur voluptates. Aut dicta exercitationem mollitia facilis non repellendus atque.
                Voluptate corporis tempora debitis fugiat consectetur doloribus ducimus eaque quo sapiente praesentium minus laborum suscipit, earum ad tenetur illum nemo ipsum doloremque accusantium vero enim, odit ipsa! Voluptates, aliquid hic!
                </p>
              <h4>EXTERNAL CSS</h4>
              <p className='external-css'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore aperiam odio neque quo ab molestias fuga eos repellat autem iusto nostrum, reprehenderit tempora ipsa quod? Libero et necessitatibus suscipit.
              Id, nostrum? Obcaecati modi aspernatur nostrum. Temporibus veniam aspernatur nesciunt! Quas illo nemo recusandae hic veniam voluptatibus accusantium neque consequatur esse ut exercitationem ducimus soluta unde, porro cum facere animi.
              Laborum ea distinctio eius voluptatum rerum, amet, in quo perferendis, obcaecati illo temporibus quae mollitia! Iusto delectus perspiciatis, facilis harum maiores quia sed nulla dolores, optio voluptas quisquam eaque magni!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
