import javax.swing.JOptionPane;

public class inicioPAM
{
    private static void ReglamentoPOO() 
    {
        JOptionPane.showMessageDialog(null, "1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n"
                                            +"2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios deinicio:7:00a.m y 14:00 p.m).\n"
                                            +"3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a), justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al tutor para ser validados y de forma posterior emitidos).\n"
                                            +"4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\n"
                                            +"5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\n"
                                            +"6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n"
                                            +"7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\n"
                                            +"8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final.\n"
                                            +"9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\n"
                                            +"10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\n"
                                            +"11. Prohibido el uso de audífonos durante la clase.\n"
                                            +"12. Prohibido comer y/o tomar líquidos en el salón.\n"
                                            +"13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\n"
                                            +"14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\n"
                                            +"15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\n"
                                            +"16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\n"
                                            +"17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el 50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.", "Reglamento");
    }

    private static void LineamientosClassroom()
    {
        JOptionPane.showMessageDialog(null,"1. Entregar los trabajos para su revisión.\n"
                                            +"2. Entregas en PDF.\n"
                                            +"3. Avisos de clase.\n"
                                            +"4. Entregas autorizadas con retraso, 5 calificación máxima.");
    }
    
    private static void FechasParciales()
    {
        JOptionPane.showMessageDialog(null,"1er Parcial: 01-10-25\n"
                                            +"2do Parcial: 05-10-25\n"
                                            +"3er Parcial: 03-12-25\n"
                                            +"Final: 08-12-25");
    }

    private static void PorcentajesParciales()
    {
        JOptionPane.showMessageDialog(null,"EVIDENCIA DE CONOCIMIENTO 40%\n"
                                            +"EVIDENCIA DE DESEMPEÑO 20%\n"
                                            +"EVIDENCIA DE PRODUCTO 30%\n"
                                            +"PROYECTO INTEGRADOR 10%", "PRIMER PARCIAL");
        JOptionPane.showMessageDialog(null,"EVIDENCIA DE CONOCIMIENTO 40%\n"
                                            +"EVIDENCIA DE DESEMPEÑO 20%\n"
                                            +"EVIDENCIA DE PRODUCTO 20%\n"
                                            +"PROYECTO INTEGRADOR 20%", "SEGUNDO PARCIAL");
        JOptionPane.showMessageDialog(null,"EVIDENCIA DE CONOCIMIENTO 20%\n"
                                            +"EVIDENCIA DE DESEMPEÑO 10%\n"
                                            +"EVIDENCIA DE PRODUCTO 40%\n"
                                            +"PROYECTO INTEGRADOR 30%", "SEGUNDO PARCIAL");
    }

    public static void main(String[] args)
    {
        Int Opcion
        String OpcionString;
        OpcionString = JOptionPane.showInputDialog(null, "¡Bienvenido!\n"
                                                        +"Este programa es un diagnóstico para saber cuánto sabemos de POO.", "PAM");
        do
        {
            switch (Opcion) 
            {
                case 0:
                    ReglamentoPOO();
                    break;
                case 1:
                    LineamientosClassroom();
                    break;
                case 2:
                    FechasParciales();
                    break;
                case 3:
                    PorcentajesParciales();
                    break;
                case 4:
                    JOptionPane.showMessageDialog(null, "¡Gracias por usar este programa!", "Salida", JOptionPane.INFORMATION_MESSAGE);
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Por favor selecciona una opción válida.", "Error", JOptionPane.WARNING_MESSAGE);
            }
        }
        while (Opcion != 4);
    }
}