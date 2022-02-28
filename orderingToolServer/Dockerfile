FROM openjdk:11
RUN groupadd spring && useradd -g spring spring
USER spring:spring
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} orderingToolServer.jar
ENTRYPOINT ["java","-jar","/orderingToolServer.jar"]