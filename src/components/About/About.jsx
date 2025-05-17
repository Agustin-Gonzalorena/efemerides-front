import React from "react";

const About = () => {
  return (
    <section className="flex justify-center items-center pt-10 mb-5 min-h-[80vh]">
      <div className="w-11/12 md:w-3/5 flex flex-col gap-5 bg-white text-black p-10 md:p-20 shadow-lg shadow-black">
        <h1 className="text-3xl mb-5 font-bold">¡Bienvenido/a a EFEMERIDES!</h1>
        <p>
          Esta página web es un proyecto en desarrollo, donde estoy explorando
          el fascinante mundo de los servidores y la programación web. En este
          espacio, estoy experimentando con la conexión a un{" "}
          <strong>servidor local</strong> que se ha configurado como una forma
          de aprendizaje y exploración personal.
        </p>
        <p>
          El objetivo principal de este proyecto es aprender sobre el
          funcionamiento de los
          <strong className="font-semibold"> servidores</strong> y cómo
          interactúan con las aplicaciones web. Para ello, he diseñado una API
          sencilla con Spring Boot en el servidor que permite realizar una
          solicitud diaria a la API de Gemini. Esta solicitud busca obtener la
          efeméride del día, proporcionando así información relevante y curiosa
          para los usuarios que visitan la página.
        </p>
        <p>
          Es importante destacar que esta página está en{" "}
          <strong>fase experimental</strong>, por lo que pueden ocurrir cambios
          y mejoras a medida que continúo aprendiendo y desarrollando mis
          habilidades en este campo.{" "}
          <span className="underline">
            {" "}
            A demas puede llegar a encontrar el servidor apagado.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
