

export default function Footer() {
    return (
        <div className="footer  bg-slate-400 h-80">
          <div className="footer_links">
          <i className="fa-brands fa-google" style={{color: '#f24e31'}}></i>
          <i className="fa-brands fa-facebook" style={{color: '#2065ee'}}></i>
          <i className="fa-brands fa-square-instagram" style={{color: '#ec3cb4'}}></i>
          <i className="fa-brands fa-twitter" style={{color: '#4c88f0'}}></i>
          </div>
        
          <p style={{color:'white', textAlign : "center"}}> &copy; 2024 Your Website Name. All rights reserved.</p>
        </div>
    )
}