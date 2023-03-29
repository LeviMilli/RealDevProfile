import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import myImage from '../public/milli-ai.png';

export default function Home() {
  return (
    <>
	<div>
      <Head>
        <title>Levi Millikin Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconLaptop.ico" />
        <meta charset="utf-8" />
		    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		    <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />

        

        
      </Head>



	<div class="is-preload">

		
			<div id="header">

				<div class="top">

				
						<div id="logo">
							<span class="image avatar48"><img src="https://media.licdn.com/dms/image/D5603AQEVMnKKD1vfvA/profile-displayphoto-shrink_800_800/0/1675133217442?e=1685577600&v=beta&t=Ccbj2M0odXP1-zcFVo9jQTaky8zgkYUgA5AbdF0wk8k" alt="" /></span>
							<h1 id="title">Levi Millikin</h1>
							<p>FullStack Software Engineer</p>
						</div>

			
						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
								<li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
								<li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

				
						<ul class="icons">
              <li><a href="https://github.com/LeviMilli" target="_blank" class="icon brands fa-github"><span class="label">Github</span></a></li>
							<li><a href="https://www.linkedin.com/in/levi-millikin/" target="_blank" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
							<li><a href="mailto:levi.millikin@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
						</ul>

				</div>

			</div>

		
			<div id="main">

			
					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Hi! I'm Levi, a Las Vegas based <br />
								  Fullstack Software Engineer </h2>
							
							</header>

							<footer id='little-space'>
								<a href="#portfolio" class="button scrolly">I need a dev</a>
                <a href="https://levi-milli.netlify.app/" target="_blank" class="button scrolly">I need a site</a>
							</footer>

						</div>
					</section>

			
					<section id="portfolio" class="two">
						<div class="container">

							<header>
								<h2>Portfolio</h2>
							</header>

							<p>Check out some of my awesome Fullstack projects utilizing the lastest technologies availeable.
                Also feel free to look over my <b className='github'><a href='https://github.com/LeviMilli' target="_blank">Github</a></b>, as everything that I publicly work on is there.
              </p>

							<div class="row">
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="cryptotrove-production.up.railway.app" target="_blank" class="image fit"><img src="https://media.giphy.com/media/wV6eBBTa0x8foQbtj1/giphy.gif" alt="" /></a>
										<header>
											<h3>Crypto Trove</h3>
											<p>Fullstack Crypto Price Tracking app. Allows user to store personal investments that is updated using real time data from API's</p>
											<p><b>Tech Used:</b> React, Javascript, Node.js, RestAPI's, Express, MongoDB </p>
											<p><b className='github'><a href='https://github.com/LeviMilli/CryptoTrove' target="_blank">Full Code</a></b></p>
										</header>
									</article>
									<article class="item">
										<a href="https://milli-ai.vercel.app/" target="_blank" class="image fit"><img src="/milli-ai.png" alt="" /></a>
										<header>
											<h3>Milli AI</h3>
											<p>Fullstack Ai App that lets users create Ai generated responses that are saved to the public and can be liked</p>
											<p><b>Tech Used:</b> Next.js, Typescript, OpenAi, Node.js</p>	
											<p><b className='github'><a href='https://github.com/LeviMilli/Milli-Ai' target="_blank">Full Code</a></b></p>									</header>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="https://food-mate.cyclic.app" target="_blank" class="image fit"><img src="https://media.giphy.com/media/LCJilvyrayF44HsYCC/giphy.gif" alt="" /></a>
										<header>
											<h3><a href='https://food-mate.cyclic.app' target="_blank">FoodMate</a></h3>
											<p>Fullstack Food recipe app. Allows user's to save pre-built recipes sourced from API's or make thier own custom recipes</p>
											<p><b>Tech Used:</b> React, Node.js, Cloudinary, RestAPI's, Express, MongoDB </p>
											<p><b className='github'><a href='https://github.com/LeviMilli/foodSnitch-server' target="_blank">Full Code</a></b></p>
										</header>
									</article>
									<article class="item">
										<a href="https://jigsaw-ai.cyclic.app" target="_blank" class="image fit"><img src="/aiscreenshot.png" alt="" /></a>
										<header>
											<h3>Jigsaw</h3>
											<p>Text to image app using OpenAi's API endpoint for image generation that displays on the screen.</p>
											<p><b>Tech Used:</b> React, OpenAi </p>
											<p><b className='github'><a href='https://github.com/LeviMilli/Ai-Jigsaw' target="_blank">Full Code</a></b></p>
										</header>
									</article>
								</div>

							</div>

						</div>
					</section>

			
					<section id="about" class="three">
						<div class="container">

							<header>
								<h2>About Me</h2>
							</header>

							{/* <a href="#" class="image featured"><img src="/binary.jpeg" alt="" /></a> */}

							<p>Fullstack software engineer with a deep interest in Full Stack development and Blockchain. Skilled in solving problems with Javascript, React, Next.js, Typescript, SQL, Node and C#! Focused on being a valuable part of a team. If someone or part of the team needs help, I have no issue in jumping in and helping with anything that is required.</p>

						</div>
					</section>

			
					<section id="contact" class="four">
						<div class="container">

							<header>
								<h2>Contact</h2>
							</header>

							<p><p>I'm much more likely to respond if you send an email to <a id='href' href="mailto:levi.millikin@gmail.com">levi.millikin@gmail.com</a>, or you contact me on <a id='href' href='https://www.linkedin.com/in/levi-millikin/' target={'_blank'}>LinkedIn</a>.</p>

              </p>

							<form method="post" action="#">
								<div class="row">
									<div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
									<div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
									<div class="col-12">
										<textarea name="message" placeholder="Message"></textarea>
									</div>
									<div class="col-12">
										<input type="submit" value="Send Message" />
									</div>
								</div>
							</form>

						</div>
					</section>

			</div>

	
			<div id="footer">

				
					<ul class="copyright">
						<li>&copy; Levi Millikin. All rights reserved.</li><li></li>
					</ul>

			</div>

		
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</div>
</div>
    </>
  )
}
