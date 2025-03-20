-- CreateTable
CREATE TABLE `Perfil` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `identificacion` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido1` VARCHAR(191) NOT NULL,
    `apellido2` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `estado` ENUM('Activo', 'Inactivo') NULL,
    `tipoUsuario` ENUM('Estudiante', 'Docente', 'Usuario') NOT NULL,

    UNIQUE INDEX `Perfil_correo_key`(`correo`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Docente` (
    `idDocente` INTEGER NOT NULL AUTO_INCREMENT,
    `idPerfil` INTEGER NOT NULL,

    UNIQUE INDEX `Docente_idPerfil_key`(`idPerfil`),
    PRIMARY KEY (`idDocente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estudiante` (
    `idEstudiante` INTEGER NOT NULL AUTO_INCREMENT,
    `idPerfil` INTEGER NOT NULL,

    UNIQUE INDEX `Estudiante_idPerfil_key`(`idPerfil`),
    PRIMARY KEY (`idEstudiante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materias` (
    `idMateria` INTEGER NOT NULL AUTO_INCREMENT,
    `idPlan` INTEGER NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `estado` ENUM('Activo', 'Inactivo') NOT NULL,

    PRIMARY KEY (`idMateria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanEstudios` (
    `idPlan` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `estado` ENUM('Activo', 'Inactivo') NOT NULL,

    PRIMARY KEY (`idPlan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `idCurso` INTEGER NOT NULL AUTO_INCREMENT,
    `idMateria` INTEGER NOT NULL,
    `idDocente` INTEGER NOT NULL,
    `aula` VARCHAR(191) NOT NULL,
    `estado` ENUM('Activo', 'Inactivo') NOT NULL,

    PRIMARY KEY (`idCurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Horario` (
    `idHorario` INTEGER NOT NULL AUTO_INCREMENT,
    `idCurso` INTEGER NOT NULL,
    `diaSemana` VARCHAR(191) NOT NULL,
    `horaInicio` VARCHAR(191) NOT NULL,
    `horaFin` VARCHAR(191) NOT NULL,
    `estado` ENUM('Activo', 'Inactivo') NOT NULL,

    PRIMARY KEY (`idHorario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OfertaAcademica` (
    `idOfertaAcademica` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcionPeriodo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idOfertaAcademica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OfertaAcademicaGrupo` (
    `idOfertaAcademica` INTEGER NOT NULL,
    `idPlanEstudios` INTEGER NOT NULL,

    PRIMARY KEY (`idOfertaAcademica`, `idPlanEstudios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistorialAcademico` (
    `idHistorialAcademico` INTEGER NOT NULL AUTO_INCREMENT,
    `idEstudiante` INTEGER NOT NULL,
    `idMateria` INTEGER NOT NULL,
    `notaFinal` DOUBLE NOT NULL,

    PRIMARY KEY (`idHistorialAcademico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auditoria` (
    `idAuditoria` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario` INTEGER NOT NULL,
    `accion` ENUM('Creacion', 'Actualizacion', 'Eliminacion', 'Login', 'Logout') NOT NULL,
    `tablaAfectada` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idAuditoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direccion` (
    `idDireccion` INTEGER NOT NULL AUTO_INCREMENT,
    `idPerfil` INTEGER NOT NULL,
    `idDistrito` INTEGER NOT NULL,
    `direccionExacta` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idDireccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provincias` (
    `ProvinciaId` INTEGER NOT NULL AUTO_INCREMENT,
    `Provincia` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ProvinciaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cantones` (
    `CantonId` INTEGER NOT NULL AUTO_INCREMENT,
    `Canton` VARCHAR(191) NOT NULL,
    `ProvinciaId` INTEGER NOT NULL,

    PRIMARY KEY (`CantonId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Distritos` (
    `DistritoId` INTEGER NOT NULL AUTO_INCREMENT,
    `Distrito` VARCHAR(191) NOT NULL,
    `CantonId` INTEGER NOT NULL,

    PRIMARY KEY (`DistritoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Docente` ADD CONSTRAINT `Docente_idPerfil_fkey` FOREIGN KEY (`idPerfil`) REFERENCES `Perfil`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estudiante` ADD CONSTRAINT `Estudiante_idPerfil_fkey` FOREIGN KEY (`idPerfil`) REFERENCES `Perfil`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Materias` ADD CONSTRAINT `Materias_idPlan_fkey` FOREIGN KEY (`idPlan`) REFERENCES `PlanEstudios`(`idPlan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_idMateria_fkey` FOREIGN KEY (`idMateria`) REFERENCES `Materias`(`idMateria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_idDocente_fkey` FOREIGN KEY (`idDocente`) REFERENCES `Docente`(`idDocente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_idCurso_fkey` FOREIGN KEY (`idCurso`) REFERENCES `Curso`(`idCurso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OfertaAcademicaGrupo` ADD CONSTRAINT `OfertaAcademicaGrupo_idOfertaAcademica_fkey` FOREIGN KEY (`idOfertaAcademica`) REFERENCES `OfertaAcademica`(`idOfertaAcademica`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OfertaAcademicaGrupo` ADD CONSTRAINT `OfertaAcademicaGrupo_idPlanEstudios_fkey` FOREIGN KEY (`idPlanEstudios`) REFERENCES `PlanEstudios`(`idPlan`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialAcademico` ADD CONSTRAINT `HistorialAcademico_idEstudiante_fkey` FOREIGN KEY (`idEstudiante`) REFERENCES `Estudiante`(`idEstudiante`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auditoria` ADD CONSTRAINT `Auditoria_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Perfil`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_idPerfil_fkey` FOREIGN KEY (`idPerfil`) REFERENCES `Perfil`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_idDistrito_fkey` FOREIGN KEY (`idDistrito`) REFERENCES `Distritos`(`DistritoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cantones` ADD CONSTRAINT `Cantones_ProvinciaId_fkey` FOREIGN KEY (`ProvinciaId`) REFERENCES `Provincias`(`ProvinciaId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Distritos` ADD CONSTRAINT `Distritos_CantonId_fkey` FOREIGN KEY (`CantonId`) REFERENCES `Cantones`(`CantonId`) ON DELETE RESTRICT ON UPDATE CASCADE;
