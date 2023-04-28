package fr.istic.taa.jaxrs.rest;


import fr.istic.taa.jaxrs.dao.EntityManagerHelper;
import fr.istic.taa.jaxrs.dao.FicheDAO;
import fr.istic.taa.jaxrs.dao.PersonneDAO;
import fr.istic.taa.jaxrs.domain.Fiche;
import fr.istic.taa.jaxrs.domain.Personne;
import fr.istic.taa.jaxrs.domain.SupportMember;
import fr.istic.taa.jaxrs.domain.User;
import io.swagger.v3.oas.annotations.Parameter;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/personne")
@Produces({"application/json"})
public class PersonneRessource {

    @GET
    public List<Personne> getAllPersonnes() {
        PersonneDAO personneDAO = new PersonneDAO();
        List<Personne> personnes = personneDAO.getAllPersonnes();
        return personnes;
    }

    @GET
    @Path("/{personneId}")
    public Personne getPersonneById(@PathParam("personneId") Long personneId) {
        PersonneDAO personneDAO = new PersonneDAO();
        Personne personne = personneDAO.getPersonneByID(personneId);
        String type = personne instanceof User ? "User" : "SupportMember";
        // return pet
        if(type == "User"){
            User user = new User();
            user.setId_member(personne.getId_member());
            user.setName(personne.getName());
            return user;
        } else{
            SupportMember support = new SupportMember();
            support.setId_member(personne.getId_member());
            support.setName(personne.getName());
            return support;
        }

    }

    //curl -X POST -H 'Content-type:application/json' -H 'Accept:application/json' -d '{"name":"peter"}' http://localhost:8080/personne
    @POST
    @Path("/addPersonne/{nom}")
    @Consumes("application/json")
    public Response addPersonne(
            @PathParam("nom") String nom) {
        // add Personne
        PersonneDAO personneDAO = new PersonneDAO();
        EntityManager manager = EntityManagerHelper.getEntityManager();
        EntityTransaction tx = manager.getTransaction();
        tx.begin();
        User user = new User(nom);
        personneDAO.save(user);
        tx.commit();
        manager.close();

        return Response.ok().entity("SUCCESS").build();
    }
}