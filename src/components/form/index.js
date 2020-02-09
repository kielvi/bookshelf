import React from 'react';
import Breadcrumbs from '../breadcrumbs/'
import './form.css';

function Form() {
	return (
		<div className="container">
			<div className="headings">
				<Breadcrumbs />
				<a href="" className="headings_back">Back</a>

				<div className="headings_title">Insert new book</div>
			</div>



			<div className="portlet">
				<div className="portlet_content">

				<form class="form">
					<div className="form_group -w50">
						<label for="title" className="form_label">Category</label>

						<div className="categories">
							<label className="categories_item">
								<input type="radio" id="category" name="category" value="reading" />
								<div className="categories_item-icon -reading"></div>
								<div className="categories_item-title">Reading</div>
							</label>
							<label className="categories_item">
								<input type="radio" id="category" name="category" value="wantToRead" />
								<div className="categories_item-icon -wantToRead"></div>
								<div className="categories_item-title">Want to read</div>
							</label>
							<label className="categories_item">
								<input type="radio" id="category" name="category" value="read" />
								<div className="categories_item-icon -read"></div>
								<div className="categories_item-title">Read</div>
							</label>

						</div>

						<span className="form_validation">Error or just validation</span>
					</div>

					<div className="form_group -one_row">
						<label for="title" className="form_label">ISBN</label>
						<input name="title" id="title" type="text" placeholder="Write the ISBN number" className="form_input -w_auto" />
						<span className="form_validation">Error or just validation</span>
					</div>

					<div className="form_group">
						<label for="title" className="form_label">Title</label>
						<input name="title" id="title" type="text" placeholder="Write the title book" className="form_input" />
						<span className="form_validation">Error or just validation</span>
					</div>

					<div className="form_group">
						<label for="author" className="form_label">Author</label>
						<input name="author" id="author" type="text" placeholder="Write the name author" className="form_input" />
						<span className="form_validation">Error or just validation</span>
					</div>

					<div className="form_group -w100">
						<label for="description" className="form_label">Description</label>
						<textarea name="description" id="description" placeholder="Write the name description" className="form_input -textarea"></textarea>
						<span className="form_validation">Error or just validation</span>
					</div>
				</form>

				</div>
				<div className="portlet_footer">
					<button className="button -submit -mr_20">Submit</button>
					<button className="button -outline">Cancel</button>
				</div>
			</div>


		</div>

	);
}

export default Form;
