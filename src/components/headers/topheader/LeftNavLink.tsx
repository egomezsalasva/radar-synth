//MODULE IMPORTS
import React from 'react'
import { TimelineLite } from "gsap";



//TYPESCRIPT PROPS
interface LeftNavLinkProps {
    leftNavHref: string,
    leftNavTab: string,
}



//MAIN COMPONENT
export default class LeftNavLink extends React.Component<LeftNavLinkProps>{

    //TYPESCRIPT REFS
    private linkNavRef: any;
    private linkNavAnim: any;

    constructor(props: LeftNavLinkProps){
        super(props)
        // Tween Ref Init
		this.linkNavRef = null;
		// Tween Animation Init
		this.linkNavAnim = null;
    }

    componentDidMount(){
		// Tween Animation
		this.linkNavAnim = new TimelineLite({ paused:true })
			.to(this.linkNavRef, 0.4, { opacity: "1", ease: "Power1.easeInOut" })
	}

    render() {
        return (
            <a 
                href={this.props.leftNavHref} 
                onMouseEnter={() => this.linkNavAnim.play()}
                onMouseLeave={() => this.linkNavAnim.reverse()}
            >
                <li ref={elem => this.linkNavRef = elem}>
                    {this.props.leftNavTab}
                </li>
            </a>
        )
    }
}


//PARENT COMPONET -> LeftNav
