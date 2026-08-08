export default function App() {
  return (
    <div style={{minHeight: '100vh', background: '#09090b', color: 'white', fontFamily: 'system-ui'}}>
      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '60px 20px'}}>
        
        <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '10px'}}>Isaac Manasseh</h1>
        <p style={{fontSize: '18px', color: '#a1a1aa', marginBottom: '24px'}}>Full-Stack Developer | Cyber Security Enthusiast</p>
        
        <div style={{marginBottom: '40px'}}>
          <a href="mailto:pythviper96@gmail.com" className="btn btn-blue">Contact</a>
          <a href="https://github.com/pythviper96-source" target="_blank" className="btn btn-zinc">GitHub</a>
        </div>

        <div style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '16px'}}>About Me</h2>
          <p style={{color: '#d4d4d8', lineHeight: '1.7'}}>
            I've been developing for the past 3 years. I specialize in both frontend and backend development and I'm also a cyber security enthusiast since 2023. I build websites, Android & iOS apps, and bots for both individual and commercial use.
          </p>
        </div>

        <div style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '16px'}}>What I Do</h2>
          <div>
            <div className="card"><h3>Web Development</h3><p>React, Node.js, Full-stack apps</p></div>
            <div className="card"><h3>Mobile Apps</h3><p>Android & iOS</p></div>
            <div className="card"><h3>Cyber Security</h3><p>Security testing & audits</p></div>
            <div className="card"><h3>Bots</h3><p>Automation for business</p></div>
          </div>
        </div>

        <div>
          <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '16px'}}>Let's Work Together</h2>
          <p>+254727948243</p>
          <p>pythviper96@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
