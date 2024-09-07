import React from 'react'
import Link from 'next/link'
import Image from "next/image";

export default function Footer() {
  return (
      <footer>
        <div className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Área superior: Bloques */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

              {/* 1er bloque */}
              <div className="md:col-span-4 lg:col-span-5">
                <div className="mb-2">
                  {/* Logo */}
                  <div className="shrink-0 mr-4" data-aos="fade-up">
                    {/* Logo */}
                    <Link href="/" className="block" aria-label="Vencub">
                      <Image
                          src="/images/vencub2-logo.png" // Path to your image
                          alt="Vencub Logo"
                          width={180} // Adjust width as needed
                          height={180} // Adjust height as needed
                      />
                    </Link>
                  </div>
                  {/*<Link href="/" className="inline-block" aria-label="Inicio">*/}
                  {/*  <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32"*/}
                  {/*       xmlns="http://www.w3.org/2000/svg">*/}
                  {/*    <path*/}
                  {/*        d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"/>*/}
                  {/*  </svg>*/}
                  {/*</Link>*/}
                </div>
                <div className="text-gray-400">
                  Proporcionamos soluciones creativas para negocios modernos. Descubre nuestros servicios y contáctanos
                  para soluciones personalizadas a tus necesidades.
                </div>
              </div>

              {/* 2do, 3er, y 4to bloque */}
              <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                {/* 2do bloque */}
                <div className="text-sm">
                  <h6 className="text-gray-200 font-medium mb-1">Productos</h6>
                  <ul>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                    </li>
                  </ul>
                </div>

                {/* 3er bloque */}
                <div className="text-sm">
                  <h6 className="text-gray-200 font-medium mb-1">Recursos</h6>
                  <ul>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Documentación</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Referencias API</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Centro de Soporte</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Guías Visuales</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Tutoriales</Link>
                    </li>
                  </ul>
                </div>

                {/* 4to bloque */}
                <div className="text-sm">
                  <h6 className="text-gray-200 font-medium mb-1">Empresa</h6>
                  <ul>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Sobre Nosotros</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Carreras</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Política de Privacidad</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Términos de Servicio</Link>
                    </li>
                    <li className="mb-1">
                      <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contáctanos</Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Área inferior */}
            <div className="md:flex md:items-center md:justify-between">

              {/* Enlaces sociales */}
              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                <li>
                  <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="GitHub">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.8 1.3 2.1 1.3.6 0 1.1-.2 1.5-.4.2-.4.4-.8.5-1.3-1.8-.2-3.7-.9-3.7-4.2 0-.9.3-1.6.7-2.2-.1-.2-.3-.9-.1-2.1 0 0 .7-.2 2.2.8.7-.2 1.5-.3 2.2-.3s1.5.1 2.2.3c1.5-1 2.2-.8 2.2-.8.2 1.2 0 1.9-.1 2.1.5.6.7 1.3.7 2.2 0 3.3-1.9 4-3.6 4.2.4.5.7 1.1.7 1.7v1.3c0 .2.1.5.5.4 1.1 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8Z" />
                    </svg>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 5c-6 0-11 4.5-11 10s5 10 11 10 11-4.5 11-10-5-10-11-10zm0 2c5 0 9 4.1 9 9s-4 9-9 9-9-4.1-9-9 4-9 9-9zm-5.7 1.3a1.3 1.3 0 11-.2 2.6 1.3 1.3 0 01.2-2.6zm5.7 1.4a4.3 4.3 0 00-4.3 4.3 4.3 4.3 0 004.3 4.3 4.3 4.3 0 004.3-4.3 4.3 4.3 0 00-4.3-4.3zm0 6.2a1.8 1.8 0 11.2-3.5 1.8 1.8 0 01-.2 3.5z" />
                    </svg>
                  </Link>
                </li>
              </ul>

              {/* Texto inferior */}
              <div className="text-sm text-gray-400">
                &copy; 2024 <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">VenCub</Link>. Todos los derechos reservados.
              </div>
            </div>

          </div>
        </div>
      </footer>
  )
}
