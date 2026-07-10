import React from 'react'

export const NaviBar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"#000080"}}>🏥𝑯𝒐𝒔𝒑𝒊𝒕𝒂𝒍 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/" style={{color:"#000080"}}>🩺 Patient Registration</a>
        <a class="nav-link" href="/search" style={{color:"#000080"}}>👤 Find Patient</a>
        <a class="nav-link" href="/delete" style={{color:"#000080"}}>🚪 Discharge Patient</a>
        <a class="nav-link" href="/view" style={{color:"#000080"}}>👨‍⚕️ All Patients</a>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
