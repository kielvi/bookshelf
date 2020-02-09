import React from 'react';
import './navbar.css';


function Navbar() {
	return (
		<div className="navbar -justify_center">
			<a className="navbar_logo"></a>

			<ul className="navbar_menu">
				<li className="navbar_menu-item">
					<a href="" className="navbar_menu-link">
						<svg viewBox="0 0 512 512" width="512" height="512"><path d="M503.401 228.884l-43.253-39.411V58.79c0-8.315-6.741-15.057-15.057-15.057H340.976c-8.315 0-15.057 6.741-15.057 15.057v8.374l-52.236-47.597c-10.083-9.189-25.288-9.188-35.367-.001L8.598 228.885c-8.076 7.36-10.745 18.7-6.799 28.889 3.947 10.189 13.557 16.772 24.484 16.772h36.689v209.721c0 8.315 6.741 15.057 15.057 15.057h125.913c8.315 0 15.057-6.741 15.057-15.057V356.931H293v127.337c0 8.315 6.741 15.057 15.057 15.057h125.908c8.315 0 15.057-6.741 15.056-15.057V274.547h36.697c10.926 0 20.537-6.584 24.484-16.772 3.945-10.19 1.277-21.53-6.801-28.891zm-69.436 15.549c-8.315 0-15.057 6.741-15.057 15.057v209.721h-95.793V341.874c0-8.315-6.742-15.057-15.057-15.057H203.942c-8.315 0-15.057 6.741-15.057 15.057v127.337h-95.8V259.49c0-8.315-6.741-15.057-15.057-15.057H36.245l219.756-200.24 74.836 68.191a15.061 15.061 0 0016.224 2.644 15.06 15.06 0 008.973-13.774V73.847h74.002v122.276c0 4.237 1.784 8.276 4.916 11.13l40.803 37.18h-41.79z"/></svg>
						<div className="navbar_menu-label">Home</div>
					</a>
				</li>
				<li className="navbar_menu-item">
					<a href="" className="navbar_menu-link">
						<svg height="640" viewBox="0 0 480 480" width="640"><path d="M240 0H136a8 8 0 00-8 8v56H8a8 8 0 00-8 8v400a8 8 0 008 8h232a8 8 0 008-8V8a8 8 0 00-8-8zm-8 416h-88v-16h88zM16 120h112v240H16zm216-32h-88V64h88zM16 376h112v24H16zm128 8V104h88v280zm88-368v32h-88V16zM128 80v24H16V80zM16 416h112v48H16zm128 48v-32h88v32zm0 0"/><path d="M479.742 437.984l-96-368a7.99 7.99 0 00-9.805-5.71l-120 32a7.996 7.996 0 00-5.68 9.742l96 368a7.978 7.978 0 009.805 5.695l120-32a7.999 7.999 0 005.68-9.727zM278.496 158.543l104.543-27.871 3.762 14.398-104.535 27.914zm112.344 2.05l46.398 177.981-104.504 27.883-46.398-177.992zm50.472 193.47l8.192 31.394-104.543 27.871-8.16-31.383zM370.29 81.8L379 115.199l-104.543 27.863-8.703-33.382zm-12.578 380.398L349 428.801l104.543-27.88 8.703 33.384zm0 0M104 144H40a8 8 0 00-8 8v64a8 8 0 008 8h64a8 8 0 008-8v-64a8 8 0 00-8-8zm-8 64H48v-48h48zm0 0"/></svg>
						<div className="navbar_menu-label">Categories</div>
					</a>
				</li>
				<li className="navbar_menu-item">
					<a href="" className="navbar_menu-link">
						<svg height="512" viewBox="0 0 512 512" width="512"><path d="M109.656 409.875h-61.31a7.5 7.5 0 000 15h61.31a7.5 7.5 0 000-15zM109.656 446.875h-61.31a7.5 7.5 0 000 15h61.31a7.5 7.5 0 000-15zM97.599 50.125H60.403c-11.304 0-20.5 9.196-20.5 20.5v229.678a7.5 7.5 0 0015 0V70.625c0-3.033 2.467-5.5 5.5-5.5h37.196c3.033 0 5.5 2.467 5.5 5.5v292c0 3.033-2.467 5.5-5.5 5.5H60.403a5.506 5.506 0 01-5.5-5.5v-32.322a7.5 7.5 0 00-15 0v32.322c0 11.304 9.196 20.5 20.5 20.5h37.196c11.304 0 20.5-9.196 20.5-20.5v-292c0-11.304-9.196-20.5-20.5-20.5zM189.397 115.75a7.5 7.5 0 00-7.5 7.5v330a7.5 7.5 0 0015 0v-330a7.5 7.5 0 00-7.5-7.5zM218.637 385.75a7.5 7.5 0 00-7.5 7.5v60a7.5 7.5 0 0015 0v-60a7.5 7.5 0 00-7.5-7.5zM218.637 115.75a7.5 7.5 0 00-7.5 7.5v240a7.5 7.5 0 0015 0v-240a7.5 7.5 0 00-7.5-7.5z" data-original="#000000"/><path d="M463.208 278.964a7.5 7.5 0 10-8.422 12.413C481.22 309.31 497 339.057 497 370.951c0 52.98-43.104 96.083-96.084 96.083s-96.084-43.103-96.084-96.083c0-64.682 63.078-111.179 125.012-91.655a7.5 7.5 0 004.51-14.306c-12.994-4.096-26.677-5.769-40.544-4.889V44.5c0-11.304-9.196-20.5-20.5-20.5H270.45c-11.304 0-20.5 9.196-20.5 20.5v20h-91.948v-44c0-11.304-9.196-20.5-20.5-20.5H20.5C9.196 0 0 9.196 0 20.5v471C0 502.804 9.196 512 20.5 512h352.81c11.304 0 20.5-9.196 20.5-20.5v-9.7C458.057 485.877 512 434.721 512 370.951c0-36.872-18.24-71.26-48.792-91.987zM142.989 497H20.5a5.506 5.506 0 01-5.5-5.5v-471c0-3.033 2.467-5.5 5.5-5.5h117.002c3.033 0 5.5 2.467 5.5 5.5 0 12.974-.013-6.742-.013 476.5zm15.013 0V79.5h91.948v412s.095 1.313.095 5.5zM338.9 278.832a111.942 111.942 0 00-34.04 36.38V93.5c0-3.033 2.468-5.5 5.5-5.5h23.04c3.032 0 5.5 2.467 5.5 5.5zM378.81 491.5c0 3.033-2.468 5.5-5.5 5.5H270.45c-2.692 0-4.935-1.947-5.405-4.505 0-407.362-.095-447.995-.095-447.995 0-3.033 2.468-5.5 5.5-5.5h102.86c3.032 0 5.5 2.467 5.5 5.5v217.58a110.128 110.128 0 00-24.909 8.244V93.5c0-11.304-9.196-20.5-20.5-20.5h-23.04c-11.304 0-20.5 9.196-20.5 20.5 0 .562-.002 274.309.005 274.869-1.258 54.789 37.41 101.005 88.945 111.453V491.5z" /><path d="M400.916 437.784c12.774 0 23.167-10.393 23.167-23.167v-20.5h20.563c12.739 0 23.104-10.364 23.104-23.104v-.126c0-12.739-10.364-23.104-23.104-23.104h-20.563v-20.5c0-12.774-10.393-23.167-23.167-23.167s-23.167 10.393-23.167 23.167v20.5h-20.563c-12.519 0-23.104 10.095-23.104 23.229 0 12.739 10.364 23.104 23.104 23.104h20.563v20.5c0 12.776 10.393 23.168 23.167 23.168zm-43.73-58.667c-4.301 0-8.104-3.419-8.104-8.229 0-4.468 3.635-8.104 8.104-8.104h28.063a7.5 7.5 0 007.5-7.5v-28c0-4.503 3.664-8.167 8.167-8.167s8.167 3.664 8.167 8.167v28a7.5 7.5 0 007.5 7.5h28.063c4.301 0 8.104 3.419 8.104 8.229 0 4.468-3.635 8.104-8.104 8.104h-28.063a7.5 7.5 0 00-7.5 7.5v28c0 4.503-3.664 8.167-8.167 8.167s-8.167-3.664-8.167-8.167v-28a7.5 7.5 0 00-7.5-7.5z" /></svg>
						<div className="navbar_menu-label">Add new book</div>
					</a>
				</li>
			</ul>

		</div>
	);
}

export default Navbar;