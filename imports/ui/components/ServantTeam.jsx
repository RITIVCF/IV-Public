import React from 'react';

export default class ServantTeam extends React.Component {

	// Mary Resorce Coordinator
	// Mark VP
	// Daniel Small Group Coordinator
  render() {
		const persons = this.getPersons();
    return (
      <section id="ServantTeam" className="container row">
        <h1>Servant Team</h1>
        <div className="col s12">
					{persons.map( (person) => {
						return (
							<Bio
								name={person.name}
								bio={person.bio}
								image={person.image}
								position={person.position}
							/>
						)
					})}
        </div>
      </section>
    );
  }

	getPersons(){
		return [
			{
				name: "Jess",
				position: "President",
				image: "jess.jpg",
				bio: `Hey everyone! I'm Jess, this year's president of InterVarsity! As a third year Visual Media major, I get to flex RIT's creative muscles through photography, graphic design, and marketing. If you ever wanna check out Rochester, I'm a lifelong native, so we can always go explore. I also love playing and watching most all sports. God has been transforming me in my faith during college more than I ever imagined already, and His grace in the process continues to amaze me everyday. I'm excited to continue serving in leadership this year by supporting my fellow leaders and learning more about what it looks like to radically do God's will on this campus and in this world. If you ever wanna grab an iced vanilla latte (my coffee go-to), let me know!`
			},
			{
				name: "Mark",
				position: "Co-Vice President",
				image: "marknash.jpg",
				bio: `Hello, my name is Mark Nash. I am the Strategy team leader for this year in charge of outreach through event planning. Some things about myself: I have lived half my life in the Tampa, Florida suburbs, and the other half in the New York country, 30 min from RIT. There are no sports that I do not like playing, and would appreciate any invites. I love talking about and researching cars, especially how to get the most miles out of the tank (or battery). I am always looking for opportunities to practice my Spanish.  Ranking just above pondering Computer Science based questions, the thing that brings me the most joy is seeing people encounter Jesus and the metamorphosis that He brings to their lives.`
			},
			{
				name: "Mary",
				position: "Co-Vice President",
				image: "marychang.jpg",
				bio: `Hi.  My name is Mary and I am the Co-Vice President in charge of resources.  I transferred from a community college in Tulsa, OK, and I am in my third year in the Film and Animation program.  I’m a perfectly imperfect person that faces God’s grace every single day, and I still have a lot to learn about God, living my faith courageously, being a leader in Christ, and art.  I’m looking forward to see how God will work in people’s lives this year, and how He will challenge us to be biblical stewards of our resources!`
			},
			{
				name: "Greg",
				position: "Large Group Coordinator",
				image: "gregtyree.png",
				bio: `I always struggle to summarize and define who I am to people. There are some of the surface things, such as being a 5th year Student Majoring in Computer Engineering at RIT. But that's only what I'm currently learning to do. I can tell you that outside of school I enjoy spending time with my friends and family, playing games, and seeing movies, among other hobbies. That only tells you a portion of my priorities. I can also tell you that I'm a gregarious person, and that I'm very friendly, but that's not what is core of who I am. At the center of my life, I'm a broken man, loved by an omniscient, omnipotent, omnipresent God, who loves me despite my flaws. My life is devoted to sharing that love with the broken people around me.`
			},
			{
				name: "Daniel",
				position: "Small Group Coordinator",
				image: "danielschwab.jpg",
				bio: `Hello there! I'm Daniel Schwab, and I have the amazing opportunity to serve InterVarsity as Small Group Coordinator this year. In addition to supporting our awesome small group leaders, I am a 4th year industrial design student. If you don't know what that is, it's similar to architecture but for everything smaller than a house.  When I am not working on projects or planning for InterVarsity, I spend most of my time hanging out with friends, maintaining my interest in philosophy, music, and history, and my focus on creativity, rest, and God. I would love to meet you for coffee, or invite you to one of the many gatherings I frequent! Praise the Lord!`
			},
			{
				name: "Tammy Bixler",
				position: "IVCF Staff Worker",
				image: "tammy.png",
				bio: `I'm Tammy Bixler, the InterVarsity Campus Staff Member at RIT. I was born and raised in Queens, NY, and graduated from Binghamton University in 2011 before joining InterVarsity staff, getting married, and then moving to Rochester to serve at RIT. Since InterVarsity exists on campus to establish and advance witnessing communities, I love that it's my job to walk alongside and encourage students to grow in their relationship with Jesus and their relationship with others. I provide leadership, coaching, and resources to empower students to develop their leadership potential and to serve RIT's campus and student body. My hope is that as students are transformed by the living, active God who loves them, they'll embody his character and live out His purposes by loving and stewarding what they've been given not just while they are part of the RIT community, but in whatever community they find themselves a part of after they graduate.`
			}
		];
	}
}



function Bio({children, name, position, bio, image}){
	return (
		<div className="bio">
			<h3>{name} - {position}</h3>
			<img src={"/images/" + image} />
			{bio}
		</div>
	)
}
