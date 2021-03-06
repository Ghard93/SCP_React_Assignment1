import SCP from './scpdata.json'

// navs array stores names of scp files from json to loop through on button press. Also includes front page div id to hide
const navs = ["frontpage"]

// read json data to create scp content and push scp names to navs array
const scp = SCP.map(
    (ScpData) => {
        navs.push(ScpData.Name)
        return(
            <div key={ScpData.Name} className="card" id={ScpData.Name}>
                <h2>{ScpData.Name}</h2>
                <h4><b>Object Class:</b> {ScpData.Class}</h4>
                <p className="imgContainer"><img src={ScpData.Image} width="100%" height="auto" alt="" /></p>
                <p><b>Special Containment Procedures:</b> {ScpData.Containment}</p>
                <p><b>Description:</b> {ScpData.Description}</p>
            </div>
        );
    }
);

// creates buttons with nav button function passing name for checking
const navitems = SCP.map(
    (NavItem) => {
        return(
            <button key={NavItem.Name} onClick={() => NavButton(NavItem.Name)} className="navItem">{NavItem.Name}</button>
        )
    }
)

// main content function
function Content()
{
    return(
        <div>
            <div className="banner"><img src="images/ScpHeading.png" width="50%" height="auto" alt="" /></div>
            <table>
                <tr>
                    <td className="navBar">
                        {navitems}
                    </td>
                </tr>
            </table>
            <div className="frontPage" id="frontpage">
                <div className="logo">
                    <img src="images/logo.png" height="auto" width="100%" alt="" />
                </div>
                <h1>SECURE - CONTAIN - PROTECT</h1>
            </div>
            {scp}
        </div>        
    );
}

// NavButton function receives scp file name then uses for loop to check values in navs array
// hiding all divs that don't have matching id's and displaying the appropriate div element
function NavButton(link)
{
    for(const thislink of navs)
    {
        if(thislink !== link)
        {
            document.getElementById(thislink).style.display = 'none'
        }
        else
        {
            document.getElementById(thislink).style.display = 'block'
        }
    }
}


export default Content;