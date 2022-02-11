import React from "react";
import main from "./css/main.css";
const divStyle = {
	backgroundcolor: "#8fc4b7",
};
const divStyle1 = {
	Height: "20",
};
const divStyle2 = {
	color: "#15101D",
};

function Request() {
	return (
		<div className="payment" style={main}>
			<div class="page-wrapper bg-light p-t-100 p-b-50" style={divStyle}>
				<div class="wrapper wrapper--w900">
					<div class="card card-6">
						<div class="card-heading">
							<h2 class="title" style={divStyle2}>
								Request Payment
							</h2>
						</div>
						<div class="card-body">
							<form method="POST">
								<div class="form-row">
									<div class="name">Date</div>
									<div class="value">
										<input
											class="input--style-6"
											type="text"
											name="full_name"
										></input>
									</div>
								</div>

								<div class="form-row">
									<div class="name">Amount in Words</div>
									<div class="value">
										<input
											class="input--style-6"
											type="text"
											name="full_name"
										></input>
									</div>
								</div>

								<div class="form-row">
									<div class="name">Amount in Figures</div>
									<div class="value">
										<input
											class="input--style-6"
											type="text"
											name="full_name"
										></input>
									</div>
								</div>

								<div class="form-row">
									<div class="name">Payable To</div>
									<div class="value">
										<input
											class="input--style-6"
											type="text"
											name="full_name"
										></input>
									</div>
								</div>

								<div class="form-row">
									<div class="name">Discription</div>
									<div class="value">
										<div class="input-group">
											<textarea
												class="textarea--style-6"
												name="message"
												placeholder="Reason for payment requisition"
											></textarea>
										</div>
									</div>
								</div>

								<div class="form-row">
									<div class="name">Initiated By</div>
									<div class="value">
										<input
											class="input--style-6"
											type="text"
											name="full_name"
										></input>
									</div>
								</div>
								<div class="form-row">
									<div class="name"> Department </div>
									<select class="select" style={divStyle1}>
										<option value="1" disabled>
											Department
										</option>
										<option value="2">ICT</option>
										<option value="3">Finance</option>
										<option value="4">Admin</option>
										<option value="5">Procurement</option>
										<option value="6">Human Resource</option>
										<option value="7">Research and Development</option>
										<option value="8">B.E.D</option>
										<option value="9">Audit</option>
										<option value="10">Permits</option>
										<option value="4">Inspectorate</option>
									</select>
								</div>

								<div class="form-row">
									<div class="name">Upload Document</div>
									<div class="value">
										<div class="input-group js-input-file">
											<input
												class="input-file"
												type="file"
												name="file_cv"
												id="file"
											></input>
											<label class="label--file" for="file">
												Choose file
											</label>
											<span class="input-file__info">No file chosen</span>
										</div>
										<div class="label--desc">
											Upload any relevant file. Max file size 50 MB
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="card-footer">
							<button
								class="btn btn--radius-2 btn--blue-2"
								type="submit"
								style={{
									color: "white",
									background: "#176FCC",
								}}
							>
								Send Application
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Request;
