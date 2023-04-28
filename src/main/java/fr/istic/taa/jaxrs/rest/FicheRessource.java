package fr.istic.taa.jaxrs.rest;

import fr.istic.taa.jaxrs.dao.EntityManagerHelper;
import fr.istic.taa.jaxrs.dao.FicheDAO;
import fr.istic.taa.jaxrs.dao.PersonneDAO;
import io.swagger.v3.oas.annotations.Parameter;
import fr.istic.taa.jaxrs.domain.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/fiche")
@Produces({"application/json"})
public class FicheRessource {

    @GET
    public List<Fiche> getAllFiches() {
        FicheDAO ficheDAO = new FicheDAO();
        List<Fiche> fiches = ficheDAO.getAllFiches();
        return fiches;
    }

    @GET
    @Path("/{ficheId}")
    public Fiche getFicheById(@PathParam("ficheId") Long ficheId) {
        FicheDAO ficheDAO = new FicheDAO();
        Fiche fiche = ficheDAO.getFicheByID(ficheId);
        String type = fiche instanceof BugFiche ? "Bug" : "Feature";
        // return pet
        if (type == "Bug") {
            BugFiche bug = new BugFiche(fiche.getTitle(),fiche.getUser());
            bug.setDescription(fiche.getDescription());
            bug.setDateEmission(fiche.getDateEmission());
            bug.setId(fiche.getId());
            bug.setSupport(fiche.getSupport());
            bug.setDatePriseenCharge(fiche.getDatePriseenCharge());
            bug.setDateCloture(fiche.getDateCloture());
            bug.setTags(fiche.getTags());
            return bug;
        } else {

            FeatureRequestFiche feature = new FeatureRequestFiche(fiche.getTitle(),fiche.getUser());
            feature.setDescription(fiche.getDescription());
            feature.setDateEmission(fiche.getDateEmission());
            feature.setId(fiche.getId());
            feature.setSupport(fiche.getSupport());
            feature.setDatePriseenCharge(fiche.getDatePriseenCharge());
            feature.setDateCloture(fiche.getDateCloture());
            feature.setTags(fiche.getTags());
            return feature;
        }

    }

    @POST
    @Path("/addFiche/{type}/{title}/{description}/{userID}")
    @Consumes("application/json")
    public Response addFiche(
            @PathParam("type") String type, @PathParam("title") String title, @PathParam("description") String description, @PathParam("userID") Long userID) {
        // add Fiche
        FicheDAO ficheDAO = new FicheDAO();
        Fiche fiche;
        if(type == "bug"){
            fiche = new BugFiche(title);
        }else{
            fiche = new FeatureRequestFiche(title);
        }

        fiche.setDescription(description);

        PersonneDAO personneDAO = new PersonneDAO();
        Personne user = personneDAO.getPersonneByID(userID);

        fiche.setUser((User) user);

        EntityManager manager = EntityManagerHelper.getEntityManager();
        EntityTransaction tx = manager.getTransaction();
        tx.begin();
        ficheDAO.save(fiche);
        tx.commit();
        manager.close();

        return Response.ok().entity("SUCCESS").build();
    }

}
