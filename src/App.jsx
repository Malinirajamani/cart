
import './App.css'
import Cartprice from './Components/Cartprice'
Cartprice

function App() {
 
  let data = [
    {
    title:"FREE",
    price:"$0/month",
    user:"Single User",
    storge:"50GB Storage",
    project:"Unlimited Public Projects",
    Community:"Community Access",
    privateproject:"Unlimited Private Project",
    support:"Dedicated Phone Support",
    subdomin:"Free Subdomain",
    Reports:"Monthly Staus Reports",
    booluser:true,
    boolstorge:true,
    boolproject:true,
    boolCommunity:true,
    boolprivate:false,
    boolsupport:false,
    boolsubdomin:false,
    boolReports:false,
    boolbtn:false
    
  },
  {
    title:"PLUS",
    price:"$9/month",
    user:"5 User",
    storge:"50GB Storage",
    project:"Unlimited Public Projects",
    Community:"Community Access",
    privateproject:"Unlimited Private Project",
    support:"Dedicated Phone Support",
    subdomin:"Free Subdomain",
    Reports:"Monthly Staus Reports",
    booluser:true,
    boolstorge:true,
    boolproject:true,
    boolCommunity:true,
    boolprivate:true,
    boolsupport:true,
    boolsubdomin:true,
    boolReports:false,
    boolbtn:false
  },
  {
    title:"PRO",
    price:"$49/month",
    user:"Ultimate User",
    storge:"50GB Storage",
    project:"Unlimited Public Projects",
    Community:"Community Access",
    privateproject:"Unlimited Private Project",
    support:"Dedicated Phone Support",
    subdomin:"Free Subdomain",
    Reports:"Monthly Staus Reports",
    booluser:true,
    boolstorge:true,
    boolproject:true,
    boolCommunity:true,
    boolprivate:true,
    boolsupport:true,
    boolsubdomin:true,
    boolReports:true,
    boolbtn:true,
  }
]

  return (
      <>
      <Cartprice data={data}/>
      </>
  )
}

export default App
