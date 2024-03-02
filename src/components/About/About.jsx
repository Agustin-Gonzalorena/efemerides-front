import React from "react";

const About = () => {
  return (
    <section className="bg-gray-700 flex items-center pt-10 pl-28 pr-28">
      <div className=" w-3/5 flex flex-col gap-5">
        <h1 className="text-3xl">¡Bienvenido/a a EFEMERIDES!</h1>
        <p>
          Esta página web es un proyecto en desarrollo, donde estoy explorando
          el fascinante mundo de los servidores y la programación web. En este
          espacio, estoy experimentando con la conexión a un servidor local
          alojado en mi propia casa, que se ha configurado como una forma de
          aprendizaje y exploración personal.
        </p>
        <p>
          El objetivo principal de este proyecto es aprender sobre el
          funcionamiento de los servidores y cómo interactúan con las
          aplicaciones web. Para ello, he diseñado una API en el servidor que
          permite realizar una solicitud diaria a la API de OpenAI. Esta
          solicitud busca obtener la efeméride del día, proporcionando así
          información relevante y curiosa para los usuarios que visitan la
          página.
        </p>
        <p>
          Es importante destacar que esta página está en fase experimental, por
          lo que pueden ocurrir cambios y mejoras a medida que continúo
          aprendiendo y desarrollando mis habilidades en este campo. ¡Tu visita
          y tus comentarios son valiosos para mí mientras avanzo en este
          emocionante viaje de aprendizaje tecnológico! este parrafo lo
          cambiaria por algo que diga que el servidor puede estar apagado y
          entonces no traer el resultado de cual es la efemeride del dia
        </p>
      </div>
      <div className="w-2/5 h-4 bg-green-500"></div>
    </section>
  );
};

export default About;
