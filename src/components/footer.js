import React from "react"
import {Link} from "gatsby"
import {Container, Row, Col} from 'reactstrap';


const Footer = props => {
 
  return (
	<footer className="footer py-5" style={{ backgroundColor: '#1c1c1c', borderRadius: '0', color: '#fff' }}>
		<Container>
			<Row>
				<Col className="col-12 col-md-6 col-lg-3 col-xl-3">
					<div className="" style={{color:'#939393'}}>
						<h4>ABOUT US</h4>
						<p className="MT-R" style={{fontSize:'12px'}}>
							Innovage Softwares was founded in 2005 with the goal to provide learning solutions to our customers with an eye on future. Innovage Softwares Inc. has expert in design and creation of learning solutions in several formats and systems.
						</p>
					</div>
				</Col>
				<Col className="col-12 col-md-6 col-lg-3 col-xl-3 pl-sm-3 pl-md-3 pl-lg-4">
					<div className="" style={{color:'#939393'}}>
						<h4>SERVICES</h4>
						<ul className="px-0 m-0 list-unstyled footer-links">
							<li><Link to="/web-hosting/" className="position-relative">Web Hosting</Link></li>
							<li><Link to="/web-designing/" className="position-relative">Web Designing</Link></li>
							<li><Link to="/customized-software/" className="position-relative">Customized Software</Link></li>
							<li><Link to="/seo-and-sem/" className="position-relative">SEO AND SEM</Link></li>
						</ul>
					</div>
				</Col>
				<Col className="col-12 col-md-6 col-lg-3 col-xl-3 pl-sm-3 pl-md-3 pl-lg-4">
					<div className="" style={{color:'#939393'}}>
						<h4>SOLUTIONS</h4>
						<ul className="px-0 m-0 list-unstyled footer-links">
							<li><Link to="/for-school/" className="position-relative">For Schools</Link></li>
							<li><Link to="/for-coachings/" className="position-relative">For Coachings</Link></li>
							<li><Link to="/for-corporate/" className="position-relative">For Corporate</Link></li>
							<li><Link to="/for-students/" className="position-relative">For Students</Link></li>
						</ul>
					</div>
				</Col>
				<Col className="col-12 col-md-6 col-lg-3 col-xl-3 pl-sm-3 pl-md-3 pl-lg-4">
					<div className="footer-contact" style={{color:'#939393'}}>
						<h4>EMAIL US</h4>
						<a href="mailto:enquiry@innovagesoftwares.com">enquiry@innovagesoftwares.com</a>

						<h4 className="mt-4 mb-2">CALL US</h4>
						<a href="tel:(91) 7379-505-684">(91) 7379-505-684</a>
					</div>
				</Col>
			</Row>
		</Container>
	</footer>
  )
}

export default Footer;
