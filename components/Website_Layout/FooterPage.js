import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import "../../css/index.css";

export default function FooterPage() {
  return (
    <Footer className="footer"
      maxColumnsPerRow={4}
      backgroundColor="rgb(34, 68, 122)"
      columns={[
        { 
          items: [
            {
              title: <p className="footerTitle">Learn More</p>
            },
            {
              icon: <img src="Icons/facebook.png" />,
              title: "Facebook",
              url: "https://www.facebook.com/coderssb",
              openExternal: true
            },
            {
              icon: <img src="Icons/instagram.png" />,
              title: "Instagram",
              url: "https://www.instagram.com/coders.sb/",
              openExternal: true
            },
            {
              icon: <img src="Icons/ucsb.png" />,
              title: "Shoreline",
              url: "https://shoreline.ucsb.edu/student_community?club_id=29769",
              openExternal: true
            }
          ]
        },
        {
          items: [
            {
              title: <p className="footerTitle">Contact Us</p>
            },
            {
              icon: <img src="Icons/email.png" />,
              title: "Email",
              url:
                "https://mail.google.com/mail/?view=cm&source=mailto&to=coderssb@gmail.com",
              openExternal: true
            },
            {
              icon: <img src="Icons/mailchimp.png" />,
              title: "Mailing List",
              url: "http://eepurl.com/gPudI1",
              openExternal: true
            }
          ]
        },
        {
          items: [
            {
              title: <p className="footerTitle">Other CS Orgs</p>
            },
            {
              icon: <img src="Icons/swe.png" />,
              title: "UCSB SWE",
              url: "https://ucsbswe.weebly.com",
              openExternal: true
            },
            {
              icon: <img src="Icons/thetatau.png" />,
              title: "Theta Tau",
              url: "https://sbthetatau.herokuapp.com",
              openExternal: true
            },
            {
              icon: <img src="Icons/sbhacks.png" />,
              title: "SB Hacks",
              url: "https://sbhacks.com",
              openExternal: true
            },
            {
              icon: <img src="Icons/ucsb.png" />,
              title: "Engineering Student Council",
              url: "https://esc.engineering.ucsb.edu",
              openExternal: true
            }
          ]
        }
      ]}
    />
  );
}
