import Head from "next/head";
import Image from "next/image";

// Icons
import { BsCheckLg } from "react-icons/bs";
import { FaChevronDown, FaUserAlt, FaUserGraduate } from "react-icons/fa";
import { FcEngineering, FcGlobe, FcIdea } from "react-icons/fc";

// Images
import barraTitulo from "../../public/images/barra-titulo.png";
import engenheiroDisciplinas from "../../public/images/engenheiro-disciplinas.png";

export default function Home() {
	return (
		<>
			<Head>
				<title>simple Landing Page</title>
			</Head>

			<nav className="container-fluid sticky-top" style={{ background: "#1D1E46" }}>
				<div className="container-xl">
					<div className="row py-4 d-flex flex-column flex-md-row justify-content-between gap-3">
						<div className="col col-md-4 d-flex align-items-center justify-content-center gap-3">
							<span className="fs-2 text-white fw-bold">Logo</span>
						</div>

						<div className="col col-md-3 d-flex align-items-center justify-content-md-end justify-content-center">
							<button
								role="button"
								type="button"
								className="btn btn-danger  rounded-pill py-2 px-5 text-white border-0 d-flex align-items-center gap-3 fw-semibold"
								style={{ background: "#7D1E19" }}
							>
								<span>CADASTRAR</span>
								<FaChevronDown />
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div
				className="sizeHeigth container-fluid px-0 rounded-0 position-relative overflow-hidden bg-image"
				style={{ backgroundImage: "url('/images/banner.jpg')" }}
			>
				<div className="row d-flex justify-content-center justify-content-md-start">
					<div
						className="col-11 text-light col-md-8 z-index-1 position-absolute rounded-0 ms-md-5"
						style={{ top: "10vh" }}
					>
						<div className="row" style={{ background: "rgba(29, 30, 70, 0.90)" }}>
							<div className="col p-3 d-flex flex-column-reverse gap-2 flex-md-row ">
								<div className="col-md-10 d-flex flex-grow-1 flex-column md-col-9">
									<h1 className="fs-4 fs-md-2">titulo</h1>
									<h2 className="fs-6 fs-md-2">sub-titulo</h2>
								</div>
								<div className=" col-md-2 d-flex justify-content-center flex-shrink-0 ">
									<FaUserGraduate size={100} />
								</div>
							</div>
						</div>

						<div
							className="row bg-dark border-0 px-3 py-2 opacity-75"
							style={{ background: "#000" }}
						>
							<h3 className="fs-6">Frase de impacto</h3>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container-fluid pt-5"
				style={{
					backgroundImage: "url('/images/bg-our-testimonial.png')",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="card border-0 bg-transparent">
					<Image src={barraTitulo} className="card-img" alt="barra de titulo" />
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<h5
							className="card-title text-uppercase mt-2 mt-lg-0"
							style={{ color: "#0E123E" }}
						>
							Detalhes do curso
						</h5>
					</div>
				</div>

				<div className="container-xl mt-5">
					<div className="vstack gap-3">
						<div>
							<div className="row d-flex flex-column-reverse flex-md-row justify-content-start">
								<div className="col-12 col-md-8 d-flex align-items-center">
									<span className="text-muted">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Labore eum nemo cupiditate porro voluptas eius at
										consectetur, quaerat consequuntur quisquam, ipsa non
										sapiente voluptatibus aliquam ea rerum. Eligendi, molestiae
										quos. Illum optio minus facere modi, saepe similique ut unde
										tempora esse dolor sapiente ex perspiciatis accusantium
										nihil nisi dolorum amet minima molestiae odit dolores
										doloribus. Nemo ipsa quidem facere ad.
									</span>
								</div>
								<div className="col-12 col-md-3 d-flex justify-content-center mb-sm-4">
									<FcGlobe size={200} />
								</div>
							</div>
						</div>
						<div>
							<div className="row d-flex flex-column-reverse flex-md-row-reverse justify-content-start">
								<div className="col-12 col-md-8 d-flex align-items-center">
									<span className="text-muted">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Tempore optio rem, architecto corporis obcaecati rerum,
										dolorem et voluptatum perspiciatis quidem, voluptate
										explicabo eligendi amet quis doloremque odio impedit iure
										doloribus. Amet, rem nesciunt qui ea aliquam illum delectus,
										enim laudantium ex quidem necessitatibus iusto ratione sit
										totam dignissimos nulla consequatur aspernatur, mollitia
										quos quas? Obcaecati magni cupiditate beatae minus adipisci?
									</span>
								</div>
								<div className="col-12 col-md-3 d-flex justify-content-center mb-sm-4 justify-content-md-end">
									<FcEngineering size={200} />
								</div>
							</div>
						</div>
						<div>
							<div className="row d-flex flex-column-reverse flex-md-row justify-content-start">
								<div className="col-12 col-md-8 d-flex align-items-center">
									<span className="text-muted">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Natus alias earum consequatur deserunt odit, laborum quod?
										Exercitationem neque ad atque sapiente consectetur illo,
										quod at quia doloribus corrupti ea maxime. Odio, nobis autem
										porro officia dolores, reiciendis sequi temporibus illum
										harum dolor eos maiores rem aliquam, quidem veritatis saepe
										dolorum mollitia. Rerum, totam quibusdam? Officiis nisi
										ducimus dolores cumque accusantium.
									</span>
								</div>
								<div className=" col-12 col-md-3 d-flex justify-content-center mb-sm-4">
									<FcIdea size={200} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container-fluid pt-5"
				style={{
					backgroundImage: "url('/images/office-building-pattern-textures.jpg')",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="card border-0 bg-transparent">
					<Image src={barraTitulo} className="card-img" alt="barra de titulo" />
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<h5
							className="card-title text-uppercase mt-2 mt-lg-0"
							style={{ color: "#0E123E" }}
						>
							DISCIPLINAS
						</h5>
					</div>
				</div>

				<div className="container-xl">
					<div className="row mt-5">
						<div className="col-3 d-none d-lg-flex align-items-center">
							<Image width={270} src={engenheiroDisciplinas} alt="Engenheiro inbec" />
						</div>

						<div className="col-12 col-md-9 pt-md-5 mb-5">
							<div className="row">
								{[
									1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
									19, 20,
								].map((item) => (
									<div
										key={item}
										className="col-12 col-lg-6 d-flex text-muted text-uppercase media-fs mb-2"
									>
										<BsCheckLg color="#00a" className="me-1 mt-1" />
										Nome da disciplina completo - {item}5h;
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container-fluid bg-image pt-3"
				style={{
					backgroundImage: "url('/images/bg-our-engenharia-diagnostica.png')",
				}}
			>
				<div className="card border-0 bg-transparent">
					<Image src={barraTitulo} className="card-img" alt="barra de titulo" />
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<h5
							className="card-title text-uppercase mt-2 mt-lg-0"
							style={{ color: "#0E123E" }}
						>
							Coordenador(es) do Curso{" "}
						</h5>
					</div>
				</div>

				<div className="container-xl mt-5">
					<div className="row d-flex justify-content-center">
						<div className="col-12 d-flex justify-content-center">
							<FaUserAlt
								size={200}
								color="#ccc"
								className="rounded-circle border border-2 p-2"
							/>
						</div>

						<div className="col-12 d-flex flex-column mb-5">
							<h4
								className="text-uppercase text-center fw-bold mb-0"
								style={{ color: "#0E123E" }}
							>
								Nome do Coordenador
							</h4>
							<span
								className="text-uppercase text-center text-muted fw-bold mb-3"
								style={{ color: "#0E123E" }}
							>
								Titulação
							</span>
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-md-9 text-muted">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Eligendi ex distinctio doloremque labore laboriosam. Architecto
									nihil totam officiis perspiciatis iste eum inventore expedita
									asperiores, minus placeat, voluptates error quod amet.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container-fluid bg-image pt-3"
				style={{ backgroundImage: "url('/images/bg-blog.png')" }}
			>
				<div className="card border-0 bg-transparent">
					<Image src={barraTitulo} className="card-img" alt="barra de titulo" />
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<h5
							className="card-title text-uppercase mt-2 mt-lg-0"
							style={{ color: "#0E123E" }}
						>
							Conheça alguns dos Professores do Curso{" "}
						</h5>
					</div>
				</div>

				<div className="container-xl">
					<div className="row mt-5">
						{[1, 2, 3, 4, 5, 6].map((item) => (
							<div className="col col-md-4 " key={item}>
								<div className="col d-flex justify-content-center">
									<FaUserAlt
										size={200}
										color="#ccc"
										className="rounded-circle border border-2 p-2"
									/>
								</div>
								<div className="col">
									<h4
										className="text-uppercase text-center fw-bold mb-0 "
										style={{ color: "#0E123E" }}
									>
										nome do professor
									</h4>
									<span
										className="col text-uppercase text-center text-muted fw-bold mb-5 d-flex justify-content-center"
										style={{ color: "#0E123E" }}
									>
										Titulação
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="container-fluid mt-2 mb-3">
				<div className="card border-0">
					<Image src={barraTitulo} className="card-img" alt="barra de titulo" />
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<h5
							className="card-title text-uppercase mt-2 mt-lg-0"
							style={{ color: "#0E123E" }}
						>
							Depoimentos{" "}
						</h5>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row d-flex justify-content-center">
					<div className="col col-md-6">
						<p className="text-center fs-md-5">
							Estas são algumas histórias de pessoas que ajudamos na construção de
							suas carreiras e na busca pela próxima grande oportunidade!
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<iframe
							className="video"
							width="100%"
							height="500"
							src="https://www.youtube.com/embed/i4B6r2sN_I0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						></iframe>
					</div>
				</div>
			</div>

			<div className="container-fluid mt-5 mb-3">
				<div className="card border-0">
					<Image src={barraTitulo} className="card-img" alt="barra de titulo" />
					<div className="card-img-overlay d-flex justify-content-center align-items-center">
						<h5
							className="card-title text-uppercase mt-2 mt-lg-0"
							style={{ color: "#0E123E" }}
						>
							INTERESSADO? REALIZE SEU CADASTRO!
						</h5>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="container-xl">
					<div className="row d-flex justify-content-center">
						<div className="col col-md-8">
							<p className="text-center fs-md-5">
								Ao se cadastrar na lista de emails, receberá informações como:
								valores, datas, horário e localização do curso selecionado. Preencha
								os campos abaixo para confirmar o seu cadastro.
							</p>
						</div>
					</div>

					<div className="row d-flex justify-content-center">
						<div className="col col-md-8">formulario</div>
					</div>
				</div>
			</div>
		</>
	);
}
