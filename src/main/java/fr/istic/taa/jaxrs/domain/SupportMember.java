package fr.istic.taa.jaxrs.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@Entity
@DiscriminatorValue("SupportMember")
@XmlRootElement(name = "support")
public class SupportMember extends Personne{
    private List<Fiche> tickets = new ArrayList<Fiche>();
    public SupportMember() {super();}

    public SupportMember(String name) {
        super(name);
    }

    /*@OneToMany(targetEntity = Fiche.class, mappedBy = "support")
    public List<Fiche> getTicket() {
        return tickets;
    }

    public void setTicket(List<Fiche> tickets) {
        this.tickets = tickets;
    }*/

}
